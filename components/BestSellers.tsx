'use client';

import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { ShoppingCart } from 'lucide-react';
import ProductModal from './model/ProductModal';
import { useProducts } from '@/context/ProductsContext';
import Link from 'next/link';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { deleteCartitemsApi, postCartitemApi, updateCartitemsApi } from '@/api-endpoints/CartsApi';
import { useVendor } from '@/context/VendorContext';
import { InvalidateQueryFilters, useQueryClient } from '@tanstack/react-query';
import LoginModal from './model/LoginModel';
import { useCartItem } from '@/context/CartItemContext';
import { slugConvert } from '@/lib/utils';

const BestSellers = () => {
    const [getUserId, setUserId] = useState<string | null>(null);
    const [getCartId, setCartId] = useState<string | null>(null);
    const [getUserName, setUserName] = useState<string | null>(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [signInmodal, setSignInModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { products, isLoading }: any = useProducts();
    const { vendorId } = useVendor();
    const queryClient = useQueryClient();
    const { cartItem }: any = useCartItem();

    useEffect(() => {
        setUserId(localStorage.getItem('userId'));
        setCartId(localStorage.getItem('cartId'));
        setUserName(localStorage.getItem('userName'));
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
        ],
    };

    const matchingProductsArray = products?.data?.map((product: any, index: number) => {
        const matchingCartItem = cartItem?.data?.find(
            (item: any) => item?.product === product?.id
        );

        if (matchingCartItem) {
            return {
                ...product,
                Aid: index,
                cartQty: matchingCartItem?.quantity,
                cartId: matchingCartItem.id,
            };
        }

        return product;
    });


    const handleAddCart = async (id: any, qty: any) => {
        const payload = {
            cart: getCartId,
            product: id,
            user: getUserId,
            vendor: vendorId,
            quantity: qty,
            created_by: getUserName ? getUserName : 'user',
        };
        try {
            const response = await postCartitemApi(``, payload);
            if (response) {
                queryClient.invalidateQueries(['getCartitemsData'] as InvalidateQueryFilters);
            }
        } catch (error) { }
    };

    const handleUpdateCart = async (id: any, type: any, qty: any) => {
        try {
            if (qty === 1) {
                const updateApi = await deleteCartitemsApi(`${id}`);
                if (updateApi) {
                    queryClient.invalidateQueries(['getCartitemsData'] as InvalidateQueryFilters);
                }
            } else {
                const response = await updateCartitemsApi(`${id}/${type}/`);
                if (response) {
                    queryClient.invalidateQueries(['getCartitemsData'] as InvalidateQueryFilters);
                }
            }
        } catch (error) { }
    };

    // Skeleton loader for 5 slides
    const skeletonArray = Array(5).fill(null);

    return (
        <section className="bg-white">
            <h2 className=" text-3xl font-bold  text-blue-500 mb-2 mt-6 text-center ">
                Shop Best Sellers
            </h2>
            <div className="flex justify-end">
                <Link href="/products">
                    <button className="text-sm px-4 py-1.5 mr-6 border border-blue-600 text-blue-600 rounded-md shadow-sm hover:shadow-md hover:bg-blue-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400">
                        View all
                    </button>
                </Link>
            </div>

            {isLoading ? (
                <Slider {...settings}>
                    {skeletonArray.map((_, idx) => (
                        <div key={idx} className="px-2 my-4">
                            <div className="bg-white h-[400px] rounded-md overflow-hidden border border-gray-200 p-4 animate-pulse">
                                <div className="bg-gray-200 h-52 w-full mb-4 rounded"></div>
                                <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
                                <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
                                <div className="h-10 bg-gray-200 rounded w-full"></div>
                            </div>
                        </div>
                    ))}
                </Slider>
            ) : (
                <Slider {...settings}>
                    {matchingProductsArray?.slice(0, 10)?.map((product: any, index: number) => (
                        <div key={index} className="px-2 my-4 ">
                            <div className="bg-white relative h-[400px] rounded-md group hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] overflow-hidden transition-all duration-300">
                                {/* Product Image */}
                                <div className="relative p-4">
                                    <Image
                                        src={product?.image_urls[0]}
                                        alt={product?.name}
                                        width={280}
                                        height={280}
                                        className="h-52 w-full object-contain mx-auto"
                                    />
                                </div>
                                {/* Divider */}
                                <span className="block w-full h-[1px] bg-blue-100" />
                                {/* Product Name */}
                                <h3 className="text-base font-medium text-gray-800 truncate px-4 mt-4 text-center">
                                    <Link
                                        href={`/shop/${slugConvert(product.name)}`}
                                        className="hover:text-blue-600 transition"
                                    >
                                        <p className="text-center font-medium truncate">{product.name}</p>
                                    </Link>
                                </h3>
                                {/* Price */}
                                <div className="text-center mt-3">
                                    <p className="text-blue-600 text-xl font-semibold">₹{product?.price}</p>
                                </div>
                                {/* Add to Cart or Qty Counter */}
                                {product?.cartQty > 0 ? (
                                    <div className="hidden group-hover:block group-hover:flex items-center justify-center mt-4 mb-4 space-x-4">
                                        <button
                                            onClick={() =>
                                                handleUpdateCart(product?.cartId, 'decrease', product?.cartQty)
                                            }
                                            disabled={product.cartQty <= 1}
                                            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 disabled:opacity-50"
                                        >
                                            −
                                        </button>
                                        <span className="text-blue-700 font-semibold text-lg">
                                            {product.cartQty}
                                        </span>
                                        <button
                                            onClick={() => handleUpdateCart(product?.cartId, 'increase', '')}
                                            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                                        >
                                            +
                                        </button>
                                    </div>
                                ) : (
                                    <div className="p-4 pt-2 hidden group-hover:block">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                getUserId ? handleAddCart(product.id, 1) : setSignInModal(true);
                                            }}
                                            className="w-full bg-blue-600 hover:bg-black hover:text-white text-white py-2 rounded-md font-medium shadow-sm transition-all duration-200"
                                        >
                                            <span className="flex justify-center">
                                                Add to cart{' '}
                                                <span className="ml-2 mt-1 align-middle">
                                                    <ShoppingCart size={16} />
                                                </span>{' '}
                                            </span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </Slider>
            )}

            {/* Modal */}
            <ProductModal
                isOpen={isModalOpen}
                product={selectedProduct}
                onClose={() => setModalOpen(false)}
            />
            {signInmodal && (
                <LoginModal
                    open={signInmodal}
                    handleClose={() => setSignInModal(false)}
                    vendorId={vendorId}
                />
            )}
        </section>
    );
};

export default BestSellers;
