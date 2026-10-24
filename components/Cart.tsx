'use client';

import { deleteCartitemsApi, updateCartitemsApi } from '@/api-endpoints/CartsApi';
import { getSizesApi, getVariantsProductApi } from '@/api-endpoints/products';
import { useCartItem } from '@/context/CartItemContext';
import { useProducts } from '@/context/ProductsContext';
import { useVendor } from '@/context/VendorContext';
import EmpImg from '../public/img/character 1.png';
import {
    InvalidateQueryFilters,
    useQuery,
    useQueryClient,
} from '@tanstack/react-query';
import { Minus, Plus } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import CheckoutDrawer from './CheckoutDrawer';
import LoginModal from './model/LoginModel';
import Link from 'next/link';
import Breadcrumb from './Breadcrumb';
import { clearLocalCart, getLocalCart, syncLocalCartToServer, updateLocalCartQty } from '@/utils/cartStorage';

export default function Cart() {
    const [isOpen, setIsOpen] = useState(false);
    const [signInModal, setSignInModal] = useState(false);
    const [isSyncing, setIsSyncing] = useState(false);
    const { vendorId } = useVendor();
    const queryClient = useQueryClient();
    const { cartItem, isLoading: isCartLoading, refetchCart }: any = useCartItem();
    const { products, allProducts, isLoading: isProductsLoading }: any = useProducts();

    // Look for matching products in allProducts (active + inactive) or products
    const productList = (allProducts?.data && allProducts.data.length > 0)
        ? allProducts.data
        : (products?.data || []);

    const matchingProductsArray = cartItem?.data
        ?.map((item: any, index: number) => {
            const productId = typeof item?.product === 'object' ? item?.product?.id : item?.product;
            const matchingProduct = productList.find(
                (product: any) => Number(product.id) === Number(productId)
            );
            const productDetails = matchingProduct || (typeof item?.product === 'object' ? item?.product : null);
            return {
                Aid: index,
                cartId: item?.id ?? productId,
                cartQty: item?.quantity,
                ...productDetails,
            };
        })
        ?.filter((item: any) => item?.name)
        ?.sort((a: any, b: any) => a.name?.localeCompare(b.name));

    const isCartItemsEmpty = !cartItem?.data || cartItem.data.length === 0;

    const totalAmount = matchingProductsArray?.reduce((acc: number, item: any) => {
        const price =
            item.price ?? item?.product_variant_price ?? item?.product_size_price ?? 0;
        return acc + price * (item.cartQty || 1);
    }, 0);

    const handleUpdateCart = async (id: any, type: any, qty: any) => {
        const storedUserId = typeof window !== 'undefined' ? localStorage.getItem('userId') : null;

        // If guest user, update quantity in localStorage
        if (!storedUserId) {
            updateLocalCartQty(id, type, qty);
            return;
        }

        try {
            if (qty === 1 && type === 'decrease') {
                const updateApi = await deleteCartitemsApi(`${id}`);
                if (updateApi) {
                    queryClient.invalidateQueries({ queryKey: ['getCartitemsData'] });
                    refetchCart?.();
                }
            } else {
                const response = await updateCartitemsApi(`${id}/${type}/`);
                if (response) {
                    queryClient.invalidateQueries({ queryKey: ['getCartitemsData'] });
                    refetchCart?.();
                }
            }
        } catch (error) {
            console.error('Failed to update cart:', error);
        }
    };

    const handleProceed = async () => {
        const storedUserId = typeof window !== 'undefined' ? localStorage.getItem('userId') : null;
        const localItems = getLocalCart();

        if (!storedUserId) {
            // User not logged in: prompt login modal so guest items can be synced
            setSignInModal(true);
            return;
        }

        // If user is logged in and there are products in localStorage, sync them via API and reload!
        if (localItems.length > 0) {
            setIsSyncing(true);
            try {
                const storedUserName = typeof window !== 'undefined' ? (localStorage.getItem('userName') || 'user') : 'user';
                await syncLocalCartToServer(storedUserId, vendorId, storedUserName);
                clearLocalCart();
                window.location.reload();
                return;
            } catch (error) {
                console.error('Failed to sync cart on proceed:', error);
            } finally {
                setIsSyncing(false);
            }
        }

        // If logged in and all items are in server cart, open checkout drawer
        setIsOpen(true);
    };

    function formatPrice(price: number): string {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 2,
        }).format(price);
    }
    const breadcrumbItems = [
        { name: 'Home', href: '/' },
        { name: 'Cart', href: '/cart', isActive: true },
    ];

    if (isCartLoading || (isProductsLoading && !isCartItemsEmpty && (!matchingProductsArray || matchingProductsArray.length === 0))) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-20">
                <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-gray-600 font-medium text-lg">Loading your cart...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-4">
            <div className="container mx-auto px-4 py-6">
                <Breadcrumb items={breadcrumbItems} />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-blue-600 text-center mb-4">Your Shopping Cart</h1>

                {isCartItemsEmpty || matchingProductsArray?.length === 0 || matchingProductsArray === undefined ? (
                    <div className="flex flex-col items-center justify-center space-y-6 py-10">
                        <Image src={EmpImg} alt="Empty Cart" height={150} width={150} className="object-contain" />
                        <p className="text-center text-gray-600 text-lg">Your cart is empty.</p>
                        <Link href="/products">
                            <span className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
                                Shop Now
                            </span>
                        </Link>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 gap-6">
                            {matchingProductsArray?.map((product: any) => (
                                <div
                                    key={product.cartId}
                                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col sm:flex-row items-center justify-between gap-4"
                                >
                                    <div className="flex items-center gap-4  flex-1">
                                        <Image
                                            src={product?.image_urls?.[0]}
                                            alt={product?.name}
                                            width={100}
                                            height={100}
                                            className="object-cover rounded-lg h-28"
                                        />
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-800 line-clamp-2 overflow-hidden">
                                                {product?.name}
                                            </h4>
                                            <p className="text-lg text-blue-600 font-medium mt-1">
                                                {formatPrice(product?.price)}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-6 mt-4 sm:mt-0">
                                        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                                            <button
                                                className="h-10 w-10 flex items-center justify-center bg-blue-100 hover:bg-gray-200 transition"
                                                onClick={() =>
                                                    handleUpdateCart(product?.cartId, 'decrease', product?.cartQty)
                                                }
                                            >
                                                <Minus className="h-5 w-5 text-gray-700" />
                                            </button>
                                            <div className="w-12 text-center text-sm font-medium">
                                                {product?.cartQty}
                                            </div>
                                            <button
                                                className="h-10 w-10 flex items-center justify-center bg-blue-100 hover:bg-gray-200 transition"
                                                onClick={() =>
                                                    handleUpdateCart(product?.cartId, 'increase', product?.cartQty)
                                                }
                                            >
                                                <Plus className="h-5 w-5 text-gray-700" />
                                            </button>
                                        </div>
                                        <div className="text-right text-md font-semibold text-gray-800 min-w-[100px]">
                                            {formatPrice(product?.price * product?.cartQty)}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 bg-white p-6 rounded-lg shadow-md ">
                            <div className="flex justify-between items-center text-2xl font-bold text-gray-800 border-b pb-4 mb-4">
                                <span>Total Amount</span>
                                <span>{formatPrice(totalAmount)}</span>
                            </div>
                            <div className="flex justify-end  text-xl font-bold text-gray-800 border-b pb-4 mb-4">
                                <button
                                    className="ml-auto bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-lg font-medium transition duration-300 ease-in-out transform disabled:opacity-50"
                                    onClick={handleProceed}
                                    disabled={isSyncing}
                                >
                                    {isSyncing ? 'Syncing...' : 'Proceed to Checkout'}
                                </button>
                            </div>

                        </div>
                    </>
                )}
                <CheckoutDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} subtotal={totalAmount} />
                <LoginModal
                    open={signInModal}
                    handleClose={() => setSignInModal(false)}
                    vendorId={vendorId}
                />
            </div>
        </div>
    );
}