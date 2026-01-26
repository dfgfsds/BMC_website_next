'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useQueryClient, InvalidateQueryFilters } from '@tanstack/react-query';

import { useProducts } from '@/context/ProductsContext';
import { useCategories } from '@/context/CategoriesContext';
import { useVendor } from '@/context/VendorContext';
import { useCartItem } from '@/context/CartItemContext';

import {
  deleteCartitemsApi,
  postCartitemApi,
  updateCartitemsApi,
} from '@/api-endpoints/CartsApi';

import LoginModal from './model/LoginModel';
import ProductModal from './model/ProductModal';
import Breadcrumb from './Breadcrumb';
import { slugConvert } from '@/lib/utils';

export default function CategoriesBasedProduct() {
  /* ---------------- PARAMS (SAFE) ---------------- */
  const params = useParams<{ slug?: string }>();
  const slug = params?.slug;

  /* ---------------- STATE ---------------- */
  const [getUserId, setUserId] = useState<string | null>(null);
  const [getCartId, setCartId] = useState<string | null>(null);
  const [getUserName, setUserName] = useState<string | null>(null);
  const [signInmodal, setSignInModal] = useState(false);

  /* ---------------- CONTEXT ---------------- */
  const { products, isLoading }: any = useProducts();
  const { categories }: any = useCategories();
  const { vendorId } = useVendor();
  const { cartItem }: any = useCartItem();

  const queryClient = useQueryClient();

  /* ---------------- LOCAL STORAGE (HOOK MUST ALWAYS RUN) ---------------- */
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUserId(localStorage.getItem('userId'));
      setCartId(localStorage.getItem('cartId'));
      setUserName(localStorage.getItem('userName'));
    }
  }, []);

  /* ---------------- FIND CATEGORY ---------------- */
  const category = categories?.data?.find(
    (cat: any) => slug && slugConvert(cat.name) === slug
  );

  const categoryName = category?.name || 'Category';

  /* ---------------- FILTER PRODUCTS ---------------- */
  const filteredProducts = products?.data?.filter(
    (product: any) => product.category === category?.id
  );

  /* ---------------- CART HANDLERS ---------------- */
  const handleUpdateCart = async (
    cartId: number,
    type: 'increase' | 'decrease',
    qty: number
  ) => {
    try {
      if (qty === 1 && type === 'decrease') {
        await deleteCartitemsApi(`${cartId}`);
      } else {
        await updateCartitemsApi(`${cartId}/${type}/`);
      }
      queryClient.invalidateQueries([
        'getCartitemsData',
      ] as InvalidateQueryFilters);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddCart = async (productId: number) => {
    if (!getUserId) {
      setSignInModal(true);
      return;
    }

    const payload = {
      cart: getCartId,
      product: productId,
      user: getUserId,
      vendor: vendorId,
      quantity: 1,
      created_by: getUserName || 'user',
    };

    try {
      await postCartitemApi('', payload);
      queryClient.invalidateQueries([
        'getCartitemsData',
      ] as InvalidateQueryFilters);
    } catch (error) {
      console.error(error);
    }
  };

  /* ---------------- MERGE CART DATA ---------------- */
  const productsWithCart = filteredProducts?.map((product: any) => {
    const cartData = cartItem?.data?.find(
      (item: any) => item.product === product.id
    );

    return {
      ...product,
      cartQty: cartData?.quantity || 0,
      cartId: cartData?.id,
    };
  });

  /* ---------------- BREADCRUMB ---------------- */
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: categoryName, href: slug ? `/categories/${slug}` : '#' },
    { name: 'Products', href: '#', isActive: true },
  ];

  /* ---------------- UI ---------------- */
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <Breadcrumb items={breadcrumbItems} />

      {/* SLUG NOT READY */}
      {!slug ? (
        <p className="text-center py-20 text-gray-500">
          Loading category...
        </p>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-blue-600 text-center mt-6 mb-8">
            {categoryName} Products
          </h1>

          {isLoading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : productsWithCart?.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {productsWithCart.map((product: any) => (
                <div
                  key={product.id}
                  className="bg-white border rounded-md p-4 hover:shadow-lg transition"
                >
                  <Link href={`/shop/${slugConvert(product.name)}`}>
                    <Image
                      src={product.image_urls[0]}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="h-64 w-full object-contain"
                    />
                  </Link>

                  <h3 className="text-center font-medium mt-3 truncate">
                    {product.name}
                  </h3>

                  <p className="text-center text-blue-600 font-semibold mt-2">
                    ₹{product.price}
                  </p>

                  {product.cartQty > 0 ? (
                    <div className="flex justify-center items-center gap-4 mt-4">
                      <button
                        onClick={() =>
                          handleUpdateCart(
                            product.cartId,
                            'decrease',
                            product.cartQty
                          )
                        }
                        className="px-3 py-1 bg-blue-600 text-white rounded"
                      >
                        −
                      </button>

                      <span>{product.cartQty}</span>

                      <button
                        onClick={() =>
                          handleUpdateCart(
                            product.cartId,
                            'increase',
                            product.cartQty
                          )
                        }
                        className="px-3 py-1 bg-blue-600 text-white rounded"
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleAddCart(product.id)}
                      className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">
              No products found for this category.
            </p>
          )}
        </>
      )}

      {signInmodal && (
        <LoginModal
          open={signInmodal}
          handleClose={() => setSignInModal(false)}
          vendorId={vendorId}
        />
      )}

      <ProductModal />
    </div>
  );
}
