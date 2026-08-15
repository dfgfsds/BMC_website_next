'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useVendor } from '@/context/VendorContext';
import url from '@/api-endpoints/ApiUrls';
import { getCartApi } from '@/api-endpoints/CartsApi';
import { useRouter } from 'next/router';
import { postSendSmsOtpUserApi, postVerifySmsOtpApi, postLoginWithGoogleApi, getCheckEmailApi, postSendOtpAPi, postSendOtpVerifyAPi, updateUserAPi } from '@/api-endpoints/authendication';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '@/config/firebase';
import { FcGoogle } from 'react-icons/fc';

const LoginForm = () => {
    const { vendorId } = useVendor();
    const router = useRouter();

    const [activeTab, setActiveTab] = useState<'email' | 'otp' | 'forgotPassword'>('email');
    const [loading, setLoading] = useState(false);
    const [googleLoading, setGoogleLoading] = useState(false);
    const [error, setError] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [mobile, setMobile] = useState('');
    const [otp, setOtp] = useState('');
    const [userId, setUserId] = useState<string | null>(null);
    const [token, setToken] = useState<string | null>(null);

    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({ email: '', password: '', mobile: '', otp: '' });
    const [isMounted, setIsMounted] = useState(false);

    // Forget password states
    const [forgetEmail, setForgetEmail] = useState('');
    const [showForgetModal, setShowForgetModal] = useState(false);
    const [forgetOtp, setForgetOtp] = useState(Array(6).fill(''));
    const [forgetTimer, setForgetTimer] = useState(60);
    const [showPasswordReset, setShowPasswordReset] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const inputsRef = useRef<HTMLInputElement[]>([]);
    const [forgetToken, setForgetToken] = useState('');
    const [forgetUserId, setForgetUserId] = useState<string | null>(null);
    const [forgetErrorMessage, setForgetErrorMessage] = useState('');
    const [emailLoader, setEmailLoader] = useState(false);
    const [forgetOtpErrorMessage, setForgetOtpErrorMessage] = useState('');
    const [forgetOtpLoader, setForgetOtpLoader] = useState(false);
    const [passwordLoader, setPasswordLoader] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) router.push('/profile');
        else setUserId(storedUserId);
    }, [router]);

    useEffect(() => {
        const storedId = localStorage.getItem('forgetuserId');
        setForgetUserId(storedId);
    }, []);

    useEffect(() => {
        if (showForgetModal && forgetTimer > 0) {
            const countdown = setInterval(() => setForgetTimer((t) => t - 1), 1000);
            return () => clearInterval(countdown);
        }
    }, [showForgetModal, forgetTimer]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const handleEmailLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        const validationErrors = {
            email: formData.email ? '' : 'Email is required',
            password: formData.password ? '' : 'Password is required',
            mobile: '',
            otp: '',
        };
        setErrors(validationErrors);

        const hasError = Object.values(validationErrors).some((msg) => msg !== '');
        if (hasError) return;

        try {
            setLoading(true);
            const response = await axios.post(url.signIn, {
                ...formData,
                vendor_id: vendorId,
            });

            if (response?.data?.user_id) {
                localStorage.setItem('userId', response.data.user_id);

                const updateApi = await getCartApi(`user/${response.data.user_id}`);
                if (updateApi?.data?.length > 0) {
                    localStorage.setItem('cartId', updateApi.data[0].id);
                }

                router.push('/products');
                window.location.reload();
            }
        } catch (err: any) {
            setError(err?.response?.data?.error || 'Something went wrong, please try again later.');
        } finally {
            setLoading(false);
        }
    };

    // ✅ OTP LOGIN FLOW
    const handleSendOtp = async () => {
        setLoading(true);
        try {
            const res = await postSendSmsOtpUserApi({
                contact_number: mobile,
                vendor_id: vendorId,
            });
            if (res?.data?.token) {
                setOtpSent(true);
                setToken(res.data.token);
                setLoading(false);

            }
        } catch (err: any) {
            setLoading(false);
            const errMsg = err?.response?.data?.message || err?.response?.data?.error || 'Failed to send OTP';
            setError(errMsg);
            if (errMsg === "No account found with this phone number. Please try Google login or sign up.") {
                setTimeout(() => {
                    handleGoogleLogin();
                }, 3000);
            }
        }
    };

    const handleVerifyOtp = async () => {
        setLoading(true);
        setError('');
        try {
            const res = await postVerifySmsOtpApi({
                otp: otp,
                token: token,
                login_type: "user",
                vendor_id: vendorId,
            });

            const userId = res?.data?.user_id;
            if (userId) {
                localStorage.setItem('userId', userId);
                const cartRes = await getCartApi(`user/${userId}`);
                if (cartRes) {
                    localStorage.setItem('cartId', cartRes.data[0]?.id);
                    setLoading(false);
                    window.location.reload();
                }
            }
            // if (response?.data?.user_id) {
            //   toast.success('Login successful!');
            //   localStorage.setItem('userId', response.data.user_id);

            //   const cartRes = await getCartApi(`user/${response.data.user_id}`);
            //   localStorage.setItem('cartId', cartRes?.data[0]?.id);

            //   handleClose();
            //   window.location.reload();
            // }
        } catch (err: any) {
            setLoading(false);
            setError(err?.response?.data?.error || 'Invalid OTP');
        }
    };

    const handleGoogleLogin = async () => {
        setGoogleLoading(true);
        setError('');

        let isPopupResolved = false;

        // Workaround for Firebase delay: reset loading when window regains focus
        const handleFocus = () => {
            window.removeEventListener('focus', handleFocus);
            setTimeout(() => {
                if (!isPopupResolved) {
                    setGoogleLoading(false);
                }
            }, 1500);
        };
        window.addEventListener('focus', handleFocus);

        try {
            const result = await signInWithPopup(auth, googleProvider);
            isPopupResolved = true;
            window.removeEventListener('focus', handleFocus);
            const idToken = await result.user.getIdToken();

            const response: any = await postLoginWithGoogleApi({
                id_token: idToken,
                vendor_id: vendorId,
            });

            if (response) {
                const uid = response?.data?.user_id || response?.data?.user?.id || response?.data?.id;
                if (uid) {
                    localStorage.setItem('userId', String(uid));
                }
                if (response?.data?.name || response?.data?.user?.name) {
                    localStorage.setItem('userName', response?.data?.name || response?.data?.user?.name);
                }
                if (response?.data?.email || response?.data?.user?.email) {
                    localStorage.setItem('email', response?.data?.email || response?.data?.user?.email);
                }

                if (uid) {
                    try {
                        const updateApi = await getCartApi(`user/${uid}`);
                        if (updateApi?.data?.[0]?.id) {
                            localStorage.setItem('cartId', updateApi.data[0].id);
                        }
                    } catch (cartErr) {
                        console.error("Error syncing cart on google login:", cartErr);
                    }
                }

                window.location.reload();
            }
        } catch (err: any) {
            console.error("Google login error:", err);
            if (err?.code === 'auth/popup-closed-by-user' || err?.code === 'auth/cancelled-popup-request') {
                // Silently handle popup close without showing error to the user
                setError('');
            } else {
                setError(err?.response?.data?.error || err?.response?.data?.message || err?.message || 'Failed to sign in with Google');
            }
        } finally {
            setGoogleLoading(false);
        }
    };

    const handleForgetEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setForgetErrorMessage('');
        setEmailLoader(true);
        try {
            const updateApi = await getCheckEmailApi(`?email=${forgetEmail}&vendor_id=${vendorId}`);

            if (updateApi?.data?.id) {
                const sendOtp = await postSendOtpAPi({ email: updateApi?.data?.email, vendor_id: vendorId });

                if (sendOtp) {
                    setEmailLoader(false);
                    setForgetToken(sendOtp?.data?.token);
                    setShowForgetModal(true);
                    setForgetTimer(60);
                    setForgetOtp(Array(6).fill(''));
                    setTimeout(() => inputsRef.current[0]?.focus(), 100);
                }
            } else {
                setForgetErrorMessage("You're not a user, please create an account.");
                setEmailLoader(false);
            }
        } catch (error) {
            setForgetErrorMessage("You're not a user, please create an account.");
            setEmailLoader(false);
        }
    };

    const handleForgetOtpChange = (val: string, idx: number) => {
        if (!/^\d*$/.test(val)) return;
        const newOtp = [...forgetOtp];
        newOtp[idx] = val;
        setForgetOtp(newOtp);
        if (val && idx < 5) inputsRef.current[idx + 1]?.focus();
    };

    const handleForgetBackspace = (e: React.KeyboardEvent, idx: number) => {
        if (e.key === 'Backspace' && !forgetOtp[idx] && idx > 0) {
            inputsRef.current[idx - 1]?.focus();
        }
    };

    const handleForgetOtpSubmit = async () => {
        setForgetOtpLoader(true);
        setForgetOtpErrorMessage('');
        const finalOtp = forgetOtp.join('');
        if (finalOtp.length === 6) {
            try {
                const updateApi = await postSendOtpVerifyAPi({
                    token: forgetToken,
                    otp: finalOtp,
                    vendor_id: vendorId,
                    login_type: 'user',
                });

                if (updateApi?.data?.user_id) {
                    if (typeof window !== 'undefined') {
                        localStorage.setItem('forgetuserId', updateApi?.data?.user_id);
                        setForgetUserId(updateApi?.data?.user_id);
                        setForgetOtpLoader(false);
                        setShowForgetModal(false);
                        setShowPasswordReset(true);
                    }
                }
            } catch (error: any) {
                const errMsg =
                    error?.response?.data?.message || 'Failed to verify OTP. Please try again.';

                setForgetOtpErrorMessage(errMsg);
                setForgetOtpLoader(false);
            }
        } else {
            setForgetOtpLoader(false);
            setForgetOtpErrorMessage('Please enter a valid 6-digit OTP.');
        }
    };

    const handlePasswordReset = async (e: React.FormEvent) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        setPasswordLoader(true);
        try {
            const updateApi = await updateUserAPi(`/${forgetUserId}`, {
                password: newPassword,
                updated_by: "user",
                role: 3,
                vendor: vendorId,
            });

            if (updateApi) {
                setShowPasswordReset(false);
                setForgetEmail('');
                setNewPassword('');
                setConfirmPassword('');
                setActiveTab('email');
            }
        } catch (error) {
            console.error('Password reset failed:', error);
        } finally {
            setPasswordLoader(false);
        }
    };

    if (!isMounted) {
        return null;
    }

    return (
        <div className="min-h-[70vh] flex items-center justify-center bg-white px-4">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Welcome Back</h2>

                <button
                    type="button"
                    onClick={handleGoogleLogin}
                    disabled={googleLoading}
                    className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-md shadow-sm transition-all duration-200 cursor-pointer disabled:opacity-50"
                >
                    <FcGoogle className="w-6 h-6 text-xl" />
                    <span className="text-base">{googleLoading ? 'Signing in...' : 'Continue with Google'}</span>
                </button>

                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or login with</span>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex space-x-4 mb-6">
                    <button
                        onClick={() => setActiveTab('email')}
                        className={`px-4 py-2 font-medium border-b-2 transition ${activeTab === 'email'
                            ? 'border-blue-600 text-blue-600'
                            : 'text-gray-600 border-transparent'
                            }`}
                    >
                        Email Login
                    </button>
                    <button
                        onClick={() => setActiveTab('otp')}
                        className={`px-4 py-2 font-medium border-b-2 transition ${activeTab === 'otp'
                            ? 'border-blue-600 text-blue-600'
                            : 'text-gray-600 border-transparent'
                            }`}
                    >
                        OTP Login
                    </button>
                </div>

                {activeTab === 'email' && (
                    <form onSubmit={handleEmailLogin} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`mt-1 w-full px-4 py-2 border rounded-md focus:outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'
                                    }`}
                            />
                            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className={`mt-1 w-full px-4 py-2 border rounded-md focus:outline-none ${errors.password ? 'border-red-500' : 'border-gray-300'
                                    }`}
                            />
                            {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="button"
                                onClick={() => setActiveTab('forgotPassword')}
                                className="text-sm text-blue-600 hover:underline"
                            >
                                Forgot Password?
                            </button>
                        </div>
                        {error && <p className="text-sm text-red-600 text-center">{error}</p>}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>
                )}

                {activeTab === 'otp' && (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium">Mobile Number</label>
                            <input
                                type="text"
                                name="mobile"
                                value={mobile}
                                onChange={(e) => {
                                    setMobile(e.target.value);
                                    setErrors({ ...errors, mobile: '' });
                                }}
                                className={`mt-1 w-full px-4 py-2 border rounded-md focus:outline-none ${errors.mobile ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                placeholder="Enter mobile number"
                            />
                            {errors.mobile && <p className="text-sm text-red-500 mt-1">{errors.mobile}</p>}
                        </div>

                        {!otpSent ? (
                            <>
                                {error && <p className="text-sm text-red-600 text-center mb-2">{error}</p>}
                                <button
                                    onClick={handleSendOtp}
                                    disabled={loading}
                                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                                >
                                    {loading ? 'Sending OTP...' : 'Send OTP'}
                                </button>
                            </>
                        ) : (
                            <>
                                <div>
                                    <label className="block text-sm font-medium">Enter OTP</label>
                                    <input
                                        required
                                        type="text"
                                        name="otp"
                                        value={otp}
                                        onChange={(e) => {
                                            setOtp(e.target.value);
                                            setErrors({ ...errors, otp: '' });
                                        }}
                                        className={`mt-1 w-full px-4 py-2 border rounded-md focus:outline-none ${errors.otp ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        placeholder="Enter the OTP"
                                    />
                                    {errors.otp && <p className="text-sm text-red-500 mt-1">{errors.otp}</p>}
                                </div>
                                {error && <p className="text-sm text-red-600 text-center">{error}</p>}
                                <button
                                    onClick={handleVerifyOtp}
                                    disabled={loading}
                                    className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                                >
                                    {loading ? 'Verifying...' : 'Verify & Login'}
                                </button>
                                <div className="flex justify-between mt-4">
                                    <button
                                        onClick={() => setOtpSent(false)}
                                        className="text-sm text-blue-600 hover:underline"
                                    >
                                        Change Number
                                    </button>
                                    <button
                                        onClick={handleSendOtp}
                                        disabled={loading}
                                        className="text-sm text-blue-600 hover:underline"
                                    >
                                        Resend OTP
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                )}

                {activeTab === 'forgotPassword' && (
                    <div className="space-y-4">
                        {!showForgetModal && !showPasswordReset && (
                            <form onSubmit={handleForgetEmailSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium">Email for Password Reset</label>
                                    <input
                                        type="email"
                                        value={forgetEmail}
                                        onChange={(e) => setForgetEmail(e.target.value)}
                                        required
                                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                                    />
                                </div>
                                {forgetErrorMessage && <p className="text-sm text-red-500 mt-1">{forgetErrorMessage}</p>}
                                <button
                                    type="submit"
                                    disabled={emailLoader}
                                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                                >
                                    {emailLoader ? 'Sending OTP...' : 'Send OTP'}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setActiveTab('email')}
                                    className="w-full text-blue-600 py-2 mt-2 border border-blue-600 rounded hover:bg-blue-50 transition"
                                >
                                    Back to Login
                                </button>
                            </form>
                        )}

                        {showForgetModal && !showPasswordReset && (
                            <div className="space-y-4">
                                <label className="block text-sm font-medium">Enter OTP sent to email</label>
                                <div className="flex space-x-2 justify-center">
                                    {forgetOtp.map((digit, idx) => (
                                        <input
                                            key={idx}
                                            ref={(el) => {
                                                if (el) inputsRef.current[idx] = el;
                                            }}
                                            type="text"
                                            maxLength={1}
                                            value={digit}
                                            onChange={(e) => handleForgetOtpChange(e.target.value, idx)}
                                            onKeyDown={(e) => handleForgetBackspace(e, idx)}
                                            className="w-10 h-10 text-center border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                        />
                                    ))}
                                </div>
                                {forgetOtpErrorMessage && <p className="text-sm text-red-500 mt-1 text-center">{forgetOtpErrorMessage}</p>}
                                <button
                                    onClick={handleForgetOtpSubmit}
                                    disabled={forgetOtpLoader}
                                    className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                                >
                                    {forgetOtpLoader ? 'Verifying...' : 'Verify OTP'}
                                </button>
                                <div className="text-center text-sm">
                                    {forgetTimer > 0 ? (
                                        <p>Resend OTP in {forgetTimer}s</p>
                                    ) : (
                                        <button onClick={handleForgetEmailSubmit} className="text-blue-600 hover:underline">
                                            Resend OTP
                                        </button>
                                    )}
                                </div>
                            </div>
                        )}

                        {showPasswordReset && (
                            <form onSubmit={handlePasswordReset} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium">New Password</label>
                                    <input
                                        type="password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        required
                                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Confirm Password</label>
                                    <input
                                        type="password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={passwordLoader}
                                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                                >
                                    {passwordLoader ? 'Resetting...' : 'Reset Password'}
                                </button>
                            </form>
                        )}
                    </div>
                )}

                <p className="text-sm text-center mt-6">
                    Don&apos;t have an account?{' '}
                    <Link href="/signup" className="text-blue-600 hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginForm;
