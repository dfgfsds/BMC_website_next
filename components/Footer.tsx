'use client';
import React from 'react';
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="mt-8 bg-gray-50">
            {/* Newsletter Section */}
            <div className="bg-blue-50 py-12 px-6 md:px-12 lg:px-20">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-bold text-gray-900 mb-3">Stay Updated with Our Latest News</h2>
                        <p className="text-gray-600 max-w-md mx-auto md:mx-0">
                            Subscribe to our newsletter for exclusive offers and updates. Unsubscribe anytime via our contact info in the legal notice.
                        </p>
                    </div>
                    <div className="flex w-full md:w-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-3 rounded-l-lg border border-gray-200 w-full md:w-96 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        />
                        <button
                            type="button"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-r-lg font-medium transition duration-200"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="bg-gray-900 text-gray-200 py-12 px-6 md:px-12 lg:px-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Your Account */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-5">About Us</h3>
                        {/* <ul className="space-y-3 text-gray-300">
                            <li><a href="#" className="hover:text-blue-400 transition duration-200">Personal Info</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition duration-200">Orders</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition duration-200">Credit Slips</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition duration-200">Addresses</a></li>
                        </ul> */}
                        <p>Brilliant Memory Computers is your destination for quality products at great prices. We believe in providing exceptional service and a seamless shopping experience.</p>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 flex-shrink-0 mt-1" />
                                <span>
                                    Shop No 2, GF 1/L, Blackers Road
                                    Gaiety Palace, Anna Salai, Chennai – 600002
                                    (Near Casino Theatre, Next to Ola Electric Store)
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5" />
                                <span>+91-7788996684</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5" />
                                <span>Info@brilliantmemorycomputers.in</span>
                            </li>
                        </ul>
                    </div>

                    {/* Guarantees */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-5">Our Guarantees</h3>
                        <ul className="space-y-3 text-gray-300">
                            <li>🚚 Shipping in 3 Days</li>
                            <li>🔄 Free Returns within 14 Days</li>
                            <li>🔒 Secure Payments</li>
                        </ul>
                    </div>

                    {/* Our Company */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link href="/profile" className="hover:text-white transition-colors">My Account</Link>
                            </li>
                            <li>
                                <Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
                            </li>
                            <li>
                                <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms And Conditions</Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/cancellation-policy" className="hover:text-white transition-colors">Cancellation Policy</Link>
                            </li>
                            <li>
                                <Link href="/shipping-policy" className="hover:text-white transition-colors">Shipping Policy</Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-white transition-colors">Blogs</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Social Media Section */}
                <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-6">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()}{' '}
                        <a
                            href="https://www.ftdigitalsolutions.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                        >
                            FT Digital Solutions (Agency)
                        </a>. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <a href="https://www.facebook.com/brilliantmemorycomputers/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition duration-200">
                            <Facebook size={20} />
                        </a>
                        <a href="https://www.instagram.com/brilliant_memory_computers/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition duration-200">
                            <Instagram size={20} />
                        </a>
                        <a href="https://x.com/Bmc_computer" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition duration-200">
                            <Twitter size={20} />
                        </a>
                        <a href="https://www.youtube.com/channel/UC_OZsZxKSGvkBb_hEMyLL5A" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition duration-200">
                            <Youtube size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
