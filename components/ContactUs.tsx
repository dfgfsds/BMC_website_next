'use client';

import { Mail, Phone } from 'lucide-react';
import Breadcrumb from './Breadcrumb';

const ContactUs = () => {
    const breadcrumbItems = [
        { name: 'Home', href: '/' },
        { name: 'Contact Us', href: '/contactUs', isActive: true },
    ];
    return (
        <section className="">
            <div className="container mx-auto px-4 py-12">
                <Breadcrumb items={breadcrumbItems} />
            </div>
            <div className='py-12 px-4 sm:px-8 max-w-7xl mx-auto'>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {/* Left: Contact Info (33%) */}
                    <div className="space-y-10">
                        {/* Customer Service */}
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">CUSTOMER SERVICE</h3>
                            <div className="flex items-start gap-3 text-sm text-gray-700 mt-2">
                                <Phone size={16} className="text-indigo-600 mt-1" />
                                <div>
                                    <p className="text-gray-400">+91-7788996684</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 text-sm text-gray-700 mt-2">
                                <Mail size={16} className="text-indigo-600 mt-1" />
                                <div>
                                    <p className="text-gray-400">Info@brilliantmemorycomputers.in</p>
                                </div>
                            </div>
                        </div>

                        {/* Products & Orders */}
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">PRODUCTS & ORDERS</h3>
                            <div className="flex items-start gap-3 text-sm text-gray-700">
                                <Phone className="text-indigo-600 mt-1" />
                                <div>
                                    <p className="text-gray-400">+91-7788996684</p>
                                    <p>Monday to Friday</p>
                                    <p>10am - 6.30pm (NewYork time)</p>
                                </div>
                            </div>
                        </div>

                        {/* Store Location */}
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">STORE LOCATOR</h3>
                            <p className="text-sm text-gray-700">Shop No 2, GF 1/L, Blackers Road</p>
                            <p className="text-sm text-gray-700">Gaiety Palace, Anna Salai, Chennai – 600002 </p>
                            <p className="text-sm text-gray-700">(Near Casino Theatre, Next to Ola Electric Store)</p>
                        </div>
                    </div>

                    {/* Right: Contact Form (66%) */}
                    <div className="md:col-span-2 bg-white rounded-lg shadow p-6">
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                            Have a question about a product, our company, or just want to chat? Email us!
                        </h2>
                        <p className="text-gray-600 mb-6 max-w-2xl">
                            We will be glad to assist you in any question and encourage you to share your ideas and improvements with us.
                        </p>

                        <form className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-1">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Name"
                                    className="w-full border border-gray-200 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-400"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-1">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    className="w-full border border-gray-200 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-400"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="Message"
                                    className="w-full border border-gray-200 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-400"
                                />
                            </div>

                            <button
                                type="submit"
                                className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
