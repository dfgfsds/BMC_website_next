import { getCartApi, postCartCreateApi, postCartitemApi } from '@/api-endpoints/CartsApi';

export interface LocalCartItem {
  id: number;
  product: number;
  quantity: number;
}

const LOCAL_CART_KEY = 'localCart';

export const getLocalCart = (): LocalCartItem[] => {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(LOCAL_CART_KEY);
    if (!data) return [];
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error('Failed to parse localCart from localStorage', error);
    return [];
  }
};

export const saveLocalCart = (cart: LocalCartItem[]) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(LOCAL_CART_KEY, JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
  } catch (error) {
    console.error('Failed to save localCart to localStorage', error);
  }
};

export const addToLocalCart = (productId: number, qty: number = 1): LocalCartItem[] => {
  const pId = Number(productId);
  const q = Number(qty) > 0 ? Number(qty) : 1;
  const cart = getLocalCart();
  const existingIndex = cart.findIndex((item) => Number(item.product) === pId);

  if (existingIndex > -1) {
    cart[existingIndex].quantity += q;
  } else {
    cart.push({
      id: pId,
      product: pId,
      quantity: q,
    });
  }

  saveLocalCart(cart);
  return cart;
};

export const updateLocalCartQty = (
  productIdOrCartId: any,
  type: 'increase' | 'decrease',
  _currentQty?: any
): LocalCartItem[] => {
  const targetId = Number(productIdOrCartId);
  const cart = getLocalCart();
  const existingIndex = cart.findIndex(
    (item) => Number(item.product) === targetId || Number(item.id) === targetId
  );

  if (existingIndex > -1) {
    if (type === 'increase') {
      cart[existingIndex].quantity += 1;
    } else if (type === 'decrease') {
      if (cart[existingIndex].quantity <= 1) {
        cart.splice(existingIndex, 1);
      } else {
        cart[existingIndex].quantity -= 1;
      }
    }
    saveLocalCart(cart);
  }

  return cart;
};

export const removeFromLocalCart = (productIdOrCartId: any): LocalCartItem[] => {
  const targetId = Number(productIdOrCartId);
  const cart = getLocalCart().filter(
    (item) => Number(item.product) !== targetId && Number(item.id) !== targetId
  );
  saveLocalCart(cart);
  return cart;
};

export const clearLocalCart = () => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(LOCAL_CART_KEY);
  window.dispatchEvent(new Event('cartUpdated'));
};

/**
 * Ensures that a cart exists for the given user and vendor, stores cartId in localStorage, and returns it.
 */
export const ensureUserCart = async (
  userId: string | number,
  vendorId?: string | number | null,
  userName?: string | null
): Promise<string | null> => {
  if (typeof window === 'undefined') return null;
  const effectiveVendorId = vendorId || 65;
  const effectiveUserName = userName || 'user';

  try {
    const cartRes = await getCartApi(`user/${userId}`);
    let matchedCartId: string | null = null;

    if (Array.isArray(cartRes?.data) && cartRes.data.length > 0) {
      // Find cart matching the current vendor (vendor 65)
      const vendorCart = cartRes.data.find(
        (c: any) => String(c.vendor) === String(effectiveVendorId)
      );
      if (vendorCart?.id) {
        matchedCartId = String(vendorCart.id);
      }
    }

    // If no cart exists for this user/vendor, create one
    if (!matchedCartId) {
      const newCart = await postCartCreateApi('', {
        user: userId,
        vendor: effectiveVendorId,
        created_by: effectiveUserName,
      });
      if (newCart?.data?.id) {
        matchedCartId = String(newCart.data.id);
      }
    }

    if (matchedCartId) {
      localStorage.setItem('cartId', matchedCartId);
      window.dispatchEvent(new Event('cartUpdated'));
    }
    return matchedCartId;
  } catch (error) {
    console.error('Error in ensureUserCart:', error);
    return null;
  }
};

/**
 * Synchronizes any products stored in localStorage to the backend API for the logged-in user.
 * After syncing, localCart is cleared.
 */
export const syncLocalCartToServer = async (
  userId: string | number,
  vendorId?: string | number | null,
  userName?: string | null
): Promise<boolean> => {
  if (typeof window === 'undefined') return false;

  const localCart = getLocalCart();
  const effectiveVendorId = vendorId || 65;
  const effectiveUserName = userName || 'user';

  try {
    // Ensure cart exists on server for current vendor
    const cartId = await ensureUserCart(userId, effectiveVendorId, effectiveUserName);

    if (!cartId) {
      console.error('No cartId found or created. Cannot sync local items.');
      clearLocalCart();
      return false;
    }

    if (localCart && localCart.length > 0) {
      // Call postCartitemApi for each item in localCart
      for (const item of localCart) {
        try {
          const payload = {
            cart: cartId,
            product: item.product,
            user: userId,
            vendor: effectiveVendorId,
            quantity: item.quantity || 1,
            created_by: effectiveUserName,
          };
          await postCartitemApi('', payload);
        } catch (itemErr) {
          console.error(`Failed to sync product ${item.product} to server cart:`, itemErr);
        }
      }
    }

    // Always clear local cart once synced
    clearLocalCart();
    return true;
  } catch (error) {
    console.error('Error in syncLocalCartToServer:', error);
    clearLocalCart();
    return false;
  }
};
