"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCartitemsApi } from "@/api-endpoints/CartsApi";
import { getLocalCart, LocalCartItem } from "@/utils/cartStorage";

// Context
const CartItemContext = createContext<any | undefined>(undefined);

// Provider
export function CartItemProvider({ children }: { children: ReactNode }) {
    const [userId, setUserId] = useState<string | null>(null);
    const [cartId, setCartId] = useState<string | null>(null);
    const [localCart, setLocalCart] = useState<LocalCartItem[]>([]);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const storedUserId = localStorage.getItem('userId');
        const storedCartId = localStorage.getItem('cartId');
        setUserId(storedUserId);
        setCartId(storedCartId);
        setLocalCart(getLocalCart());

        const handleCartUpdated = () => {
            const currentUserId = localStorage.getItem('userId');
            const currentCartId = localStorage.getItem('cartId');
            setUserId(currentUserId);
            setCartId(currentCartId);
            setLocalCart(getLocalCart());
        };

        window.addEventListener('cartUpdated', handleCartUpdated);
        window.addEventListener('storage', handleCartUpdated);
        return () => {
            window.removeEventListener('cartUpdated', handleCartUpdated);
            window.removeEventListener('storage', handleCartUpdated);
        };
    }, []);

    // Resilience: If user is logged in but cartId is missing, auto-ensure cart for vendor 65
    useEffect(() => {
        if (userId && !cartId) {
            import('@/utils/cartStorage').then(({ ensureUserCart }) => {
                ensureUserCart(userId, 65).then((id) => {
                    if (id) setCartId(id);
                });
            });
        }
    }, [userId, cartId]);

    const { data, isLoading, refetch } = useQuery({
        queryKey: ["getCartitemsData", cartId],
        queryFn: () => getCartitemsApi(`/${cartId}`),
        enabled: !!cartId && !!userId,
    });

    // When logged in (userId exists in localStorage):
    // Strictly use server cart items (data or { data: [] }).
    // A logged-in user MUST NEVER fall back to guest localCart.
    // When not logged in (!userId), supply guest items from localCart.
    const effectiveCartItem = userId
        ? (data || { data: [] })
        : { data: isClient ? localCart : [] };

    return (
        <CartItemContext.Provider
            value={{
                cartItem: effectiveCartItem,
                isAuthenticated: !!userId,
                isLoading: !!userId && isLoading,
                refetchCart: refetch, // ⬅️ Expose refetch as `refetchCart`
                localCart: userId ? [] : localCart,
                isGuest: !userId,
            }}
        >
            {children}
        </CartItemContext.Provider>
    );
}

// Hook
export function useCartItem() {
    const context = useContext(CartItemContext);
    if (!context) {
        throw new Error("useCartItem must be used within a CartItemProvider");
    }
    return context;
}

