'use client';

import { patchUserSelectAddressAPi, updateUserAPi } from '@/api-endpoints/authendication';
import { getAddressApi, getAppliedCouponDataApi, postApplyCouponApi } from '@/api-endpoints/CartsApi';
import { InvalidateQueryFilters, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { Loader2, MapPin, Phone, X } from 'lucide-react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useVendor } from '@/context/VendorContext';
import { useUser } from '@/context/UserContext';
import { useCartItem } from '@/context/CartItemContext';
import Image from 'next/image';
import check from "../public/check.png";
import { baseUrl } from '@/api-endpoints/ApiUrls';
import toast from 'react-hot-toast';

interface CheckoutSidebarProps {
    isOpen: boolean;
    onClose: () => void;
    subtotal: any;
}

const CheckoutDrawer = ({ isOpen, onClose, subtotal }: CheckoutSidebarProps) => {


    const [getUserName, setUserName] = useState<string | null>(null);
    const [getCartId, setCartId] = useState<string | null>(null);
    const [selectedAddressId, setSelectedAddressId] = useState<string>();
    const [paymentValue, setPaymentValue] = useState('')
    const [deliveryInfo, setDeliveryInfo] = useState<any>(null);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showFailureModal, setShowFailureModal] = useState(false);
    const [showPhoneModal, setShowPhoneModal] = useState(false);
    const [phoneInput, setPhoneInput] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [phoneUpdating, setPhoneUpdating] = useState(false);
    const queryClient = useQueryClient();
    const router = useRouter();
    const { vendorId } = useVendor()
    const { user, setUser }: any = useUser();
    const [code, setCode] = useState('');
    const [isChecking, setIsChecking] = useState(false);
    const [error, setError] = useState('');

    const { refetchCart } = useCartItem();

    const [userId, setUserId] = useState<string | null>(null);
    const [paymentMethod, setPaymentMethod] = useState("");



    useEffect(() => {
        setUserName(user?.data?.name);
        setUserId(user?.data?.id);
    }, [user]);

    const { data, isLoading }: any = useQuery({
        queryKey: ['getAddressData', userId],
        queryFn: () => getAddressApi(`user/${userId}`)
    });

    useEffect(() => {
        if (data?.data?.length) {
            const selected = data?.data?.find((address: any) => address?.selected_address === true);
            if (selected?.id) {
                setSelectedAddressId(String(selected?.id));
            }
        }
    }, [data]);

    const handleSelectAddress = async (id: any) => {
        try {
            const upadetApi = await patchUserSelectAddressAPi(`user/${userId}/address/${id?.id}`, { updated_by: getUserName })
            if (upadetApi) {
                queryClient.invalidateQueries(['getAddressData'] as InvalidateQueryFilters);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getDeliveryCharge = async () => {

        try {
            const userId = user?.data?.id;
            if (!userId) throw new Error("User ID not found");
            const res = await axios.get(`${baseUrl}/vendor-site-payment-delivery-partner-details/${vendorId}/`)
            setDeliveryInfo(res.data[0]);
            console.log(res?.data[0]?.own_delivery_charge, "delivery");

        } catch (error) {
            console.error("Error fetching delivery charge:", error);
        }
    }

    useEffect(() => {
        getDeliveryCharge()
    }, [paymentMethod])
    // getAppliedCouponDataApi
    const getAppliedCouponData: any = useQuery({
        queryKey: ['getAppliedCouponDataData', userId],
        queryFn: () => getAppliedCouponDataApi(`?user_id=${userId}`),
        enabled: !!userId
    })

    const RAZOR_PAY_KEY = 'rzp_live_zprl8eteDSWOEX';

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setError('');
        setIsChecking(true);

        const payload = {
            user_id: Number(userId),
            coupon_code: code,
            vendor_id: vendorId,
            updated_by: getUserName || 'user'
        };

        try {
            const updateApi = await postApplyCouponApi("", payload);
            if (updateApi) {
                getDeliveryCharge()
            }
        } catch (error: any) {
            setError(error?.response?.data?.error || "Failed to apply coupon. Please try again.");
        } finally {
            setIsChecking(false);
        }
    };

    useEffect(() => {
        if (user?.data?.contact_number) {
            setPhoneInput(user.data.contact_number);
        } else if (typeof window !== 'undefined') {
            const stored = localStorage.getItem('contact_number');
            if (stored) setPhoneInput(stored);
        }
    }, [user]);

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value.replace(/\D/g, '').slice(0, 10);
        setPhoneInput(val);
        if (val.length === 0) {
            setPhoneError("Mobile number is required");
        } else if (val.length < 10) {
            setPhoneError("Mobile number must be 10 digits");
        } else {
            setPhoneError("");
        }
    };

    const handleUpdate = async () => {
        if (!phoneInput) {
            setPhoneError("Mobile number is required");
            return;
        }
        if (phoneInput.length !== 10) {
            setPhoneError("Mobile number must be 10 digits");
            return;
        }

        setPhoneUpdating(true);
        try {
            const currentUserId = user?.data?.id || userId || (typeof window !== 'undefined' ? localStorage.getItem('userId') : null);
            const response = await updateUserAPi(`/${currentUserId}`, {
                name: user?.data?.name || getUserName || 'user',
                email: user?.data?.email || (typeof window !== 'undefined' ? localStorage.getItem('email') : ''),
                contact_number: phoneInput,
                updated_by: user?.data?.name ? user?.data?.name : 'user',
                role: 3,
                vendor: vendorId,
            });

            if (response) {
                if (typeof window !== 'undefined') {
                    localStorage.setItem('contact_number', phoneInput);
                }
                if (setUser) {
                    setUser((prev: any) => ({
                        ...prev,
                        data: {
                            ...prev?.data,
                            contact_number: phoneInput,
                        },
                    }));
                }
                queryClient.invalidateQueries(["gerUserData"] as InvalidateQueryFilters);
                queryClient.invalidateQueries({ queryKey: ["getUserData"] });
                toast.success("Profile updated successfully!");
                setShowPhoneModal(false);
                setPhoneError('');

                // Recalling placeOrder with the updated mobile number
                setTimeout(() => {
                    placeOrder(phoneInput);
                }, 300);
            }
        } catch (error: any) {
            toast.error(error?.response?.data?.error || error?.response?.data?.message || 'Something went wrong, please try again later.');
            console.error("Update failed:", error);
        } finally {
            setPhoneUpdating(false);
        }
    };

    const placeOrder = async (overridePhone?: string | any) => {
        try {
            const currentUserId = user?.data?.id || userId || (typeof window !== 'undefined' ? localStorage.getItem('userId') : null);
            if (!currentUserId) throw new Error("User ID not found");
            if (!selectedAddressId) throw new Error("No address selected");

            const phone = (typeof overridePhone === 'string' ? overridePhone : null) || user?.data?.contact_number || (typeof window !== 'undefined' ? localStorage.getItem('contact_number') : null);

            // If phone is missing, prompt update modal
            if (!phone) {
                setShowPhoneModal(true);
                return;
            }

            const payload = {
                user_id: parseInt(String(currentUserId)),
                vendor_id: vendorId,
                customer_phone: phone,
            };

            if (paymentMethod === "cod") {
                const response = await axios.post(`${baseUrl}/cod-pay-now/`, payload);
                console.log("COD Order placed:", response.data);
                refetchCart();
                setShowSuccessModal(true);

                setTimeout(() => {
                    setShowSuccessModal(false);
                    router.push("/profile?tab=Orders");
                }, 5000);
            } else {
                const response = await axios.post(`${baseUrl}/prepaid-pay-now/`, payload);
                const { payment_order_id, final_price } = response.data;

                const options = {
                    key: RAZOR_PAY_KEY,
                    amount: final_price * 100,
                    currency: "INR",
                    name: "Brilliant Memory Computers",
                    description: "Order Payment",
                    order_id: payment_order_id,
                    handler: function (response: any) {
                        console.log("Payment Success:", response);
                        refetchCart();
                        setShowSuccessModal(true);

                        setTimeout(() => {
                            setShowSuccessModal(false);
                            router.push("/orders");
                        }, 5000);
                    },
                    prefill: {
                        name: user?.data?.name || user?.name || getUserName,
                        email: user?.data?.email || user?.email || (typeof window !== 'undefined' ? localStorage.getItem('email') : ''),
                        contact: phone,
                    },
                    notes: {
                        address: "Selected Address",
                    },
                    theme: {
                        color: "#2563EB",
                    },
                };

                const razor = new (window as any).Razorpay(options);
                razor.open();
            }
        } catch (error: any) {
            console.error("Error placing order:", error);
            const errMsg = error?.response?.data?.message || error?.message || "";
            // Check if error is due to missing customer_phone
            if (errMsg.includes("customer_phone") || errMsg.includes("Missing required fields")) {
                setShowPhoneModal(true);
                return;
            }
            setShowFailureModal(true);
            setTimeout(() => {
                setShowFailureModal(false);
                router.push("/cart");
            }, 5000);
        }
    };

    function formatPrice(price: number): string {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 2,
        }).format(price);
    }


    if (!isOpen) return null;

    return (
        <>
            {/* Sidebar Drawer */}
            <div
                className={`fixed overflow-x-scroll top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-lg transform transition-transform duration-300 z-[10001] ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-lg font-semibold">Checkout</h2>
                    <X className="cursor-pointer" onClick={onClose} />
                </div>

                <div className="p-4 space-y-6">

                    {data?.data?.length ? (
                        <div className="space-y-2">
                            <p className="mt-2 inline-block text-sm text-blue-600 hover:text-blue-700 cursor-pointer flex justify-end"
                                onClick={() => { router.push('/profile?tab=Address') }}>Manage address</p>
                            {data?.data
                                ?.map((address: any) => (
                                    <label
                                        key={address.id}
                                        className={`flex items-start p-3 rounded-lg border cursor-pointer
                                 ${selectedAddressId === address.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:bg-gray-50'}`}
                                    >
                                        <input
                                            type="radio"
                                            name="deliveryAddress"
                                            value={address.id}
                                            checked={selectedAddressId === String(address.id)}
                                            onChange={() => { handleSelectAddress(address) }}
                                            className="mt-1 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                        />
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-900">
                                                {address.street}
                                                {address.isDefault && (
                                                    <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                                                        Default
                                                    </span>
                                                )}
                                            </p>
                                            <p className="text-sm text-gray-800">
                                                {address.address_type}
                                            </p>
                                            <p className="text-sm text-gray-800">
                                                {address.email_address} | {address.contact_number}
                                            </p>
                                            <p className="text-sm text-black">
                                                {address.city}, {address.state} {address.zipCode}
                                            </p>
                                        </div>
                                    </label>
                                ))}
                        </div>
                    ) : (

                        <div className="text-center p-4 bg-gray-50 rounded-lg mb-3">
                            <MapPin className="mx-auto h-8 w-8 text-gray-400" />
                            <p className="mt-2 text-sm text-gray-600">No delivery address found</p>
                            <p className="mt-2 inline-block text-sm text-blue-600 hover:text-blue-700 cursor-pointer"
                                onClick={() => {
                                    router.push('/profile?tab=addresses')
                                }
                                    //  setOpenMoadl(!openModal)
                                }
                            >
                                Add a delivery address
                            </p>
                        </div>

                    )}
                    {/* Payment Method */}
                    <div className="mb-4">
                        <label className="block text-black mb-2 font-medium text-sm font-squares">Payment Method</label>
                        <select
                            value={paymentMethod}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="w-full p-2 rounded-md  border border-gray-600"
                        >
                            <option value="">Prepaid</option>
                            <option value="cod">Cash on Delivery (COD)</option>
                        </select>
                    </div>

                    {getAppliedCouponData?.data?.data?.applied_coupons?.length ? (
                        <>
                            <div className="bg-green-50 p-4 rounded-lg space-y-2 flex justify-between">
                                <div className=''>
                                    <p className="text-sm text-green-700 font-bold mb-2">
                                        Applied Coupon: {getAppliedCouponData?.data?.data?.data[0]?.code}
                                    </p>

                                    <p className="text-sm text-green-700 font-bold">
                                        Discount Amount: ₹{getAppliedCouponData?.data?.data?.applied_coupons[0]?.discount || 0}
                                    </p>
                                </div>
                                <button
                                    // onClick={handleRemoveCoupon}
                                    className="text-[#a5291b] border-red-300 hover:bg-red-50"
                                >
                                    Remove Coupon
                                </button>
                            </div>
                        </>
                    ) : (
                        <div>
                            <h2 className="text-lg font-semibold mb-1">Coupon</h2>
                            <div className="flex items-center gap-2 mb-2">
                                <input
                                    type="text"
                                    placeholder="Discount code"
                                    className="bg-white w-full p-2"
                                    value={code}
                                    onChange={(e: any) => setCode(e.target.value.toUpperCase())}
                                />
                                <button disabled={!code || isChecking} onClick={handleSubmit} className="whitespace-nowrap bg-blue-600 hover:bg-blue-700 p-2 rounded-md text-white font-bold ">

                                    {isChecking ? (
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                    ) : (
                                        'Apply'
                                    )}
                                </button>
                            </div>
                            {error && (
                                <p className="text-sm text-[#a5291b]">Coupon not found!</p>
                            )}
                        </div>
                    )}


                    {/* Delivery Charge */}
                    <div className="border-t pt-4">
                        <p className="text-sm">
                            Delivery Charges: <span className="font-semibold">{formatPrice(Number(deliveryInfo?.own_delivery_charge))}</span>
                        </p>
                    </div>
                    <span>Total <span className="text-sm">(final price including delivery):</span>  </span>
                    <span>{formatPrice(Number(deliveryInfo?.own_delivery_charge) + Number(subtotal))}</span>

                    {/* Place Order Button */}
                    <button
                        onClick={() => placeOrder()}
                        disabled={!selectedAddressId}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium transition"
                    >
                        Place Order
                    </button>
                </div>
            </div >

            {/* Backdrop */}
            {
                isOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 z-40"
                        onClick={() => onClose()}
                    />
                )
            }
            {showSuccessModal && (
                <div className="fixed inset-0 z-[10010] flex items-center justify-center bg-black/50">

                    <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm ">
                        <Image alt='image' className='mx-auto mb-3' src={check} width={100} height={100} />
                        <h2 className="text-lg font-bold text-green-600 mb-2">Order Placed Successfully!</h2>
                        <p className="text-gray-600">You will be redirected to your orders shortly...</p>
                    </div>
                </div>
            )}

            {/* Failure Modal */}
            {showFailureModal && (
                <div className="fixed inset-0 z-[10010] flex items-center justify-center bg-black/50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
                        <h2 className="text-lg font-bold text-red-600 mb-2">Order Failed</h2>
                        <p className="text-gray-600">You will be redirected back to your cart.</p>
                    </div>
                </div>
            )}

            {/* Update Mobile Number Modal */}
            {showPhoneModal && (
                <div className="fixed inset-0 z-[10020] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                    <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 relative animate-in fade-in zoom-in-95 duration-200">
                        <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                            <div className="flex items-center gap-2">
                                <div className="p-2 bg-blue-50 text-blue-600 rounded-full">
                                    <Phone size={20} />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900">Update Mobile Number</h3>
                            </div>
                            <button
                                onClick={() => {
                                    setShowPhoneModal(false);
                                    setPhoneError('');
                                }}
                                className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <p className="text-sm text-gray-600 mt-3 mb-4">
                            Mobile number is required to proceed with your order. Please enter your 10-digit mobile number.
                        </p>

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleUpdate();
                            }}
                            className="space-y-4"
                        >
                            <div>
                                <label htmlFor="phoneInput" className="block text-sm font-medium text-gray-700 mb-1">
                                    Mobile Number
                                </label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium text-sm">
                                        +91
                                    </span>
                                    <input
                                        id="phoneInput"
                                        type="tel"
                                        maxLength={10}
                                        value={phoneInput}
                                        onChange={handlePhoneChange}
                                        placeholder="Enter 10-digit number"
                                        autoFocus
                                        className={`w-full pl-12 pr-4 py-2.5 border rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition text-base ${phoneError
                                            ? 'border-red-500 focus:ring-red-200'
                                            : 'border-gray-300 focus:border-blue-600 focus:ring-blue-100'
                                            }`}
                                    />
                                </div>
                                {phoneError && (
                                    <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-medium">
                                        {phoneError}
                                    </p>
                                )}
                            </div>

                            <div className="flex gap-3 pt-2">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowPhoneModal(false);
                                        setPhoneError('');
                                    }}
                                    className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={phoneUpdating}
                                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg shadow-sm transition flex items-center justify-center gap-2 disabled:opacity-60"
                                >
                                    {phoneUpdating ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            <span>Updating...</span>
                                        </>
                                    ) : (
                                        <span>Save & Place Order</span>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default CheckoutDrawer;
