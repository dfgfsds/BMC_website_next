'use client';

import Head from "next/head";
import { Mail, Phone } from 'lucide-react';
import Breadcrumb from './Breadcrumb';
import LogoImg from "../public/img/bmc-logo.png";
const ContactUs = () => {
    const breadcrumbItems = [
        { name: 'Home', href: '/' },
        { name: 'Contact Us', href: '/contact-us', isActive: true },
    ];

    return (
        <>
            {/* ⭐ SEO & Schema */}
            <Head>
                <title>Contact Us | Brilliant Memory Computers – Laptop & PC Sales</title>

                <meta
                    name="description"
                    content="Get in touch with Brilliant Memory Computers for laptop sales, custom PC builds, computer repair, and tech support. Call or message us today for fast assistance."
                />
                <meta
                    name="keywords"
                    content="Brilliant Memory Computers, contact, laptop sales, PC sales, custom PC build, computer repair, tech support, service center"
                />

                <link rel="canonical" href="https://www.brilliantmemorycomputers.in/contact-us" />

                {/* Open Graph */}
                <meta property="og:title" content="Contact Us | Brilliant Memory Computers – Laptop & PC Sales" />
                <meta property="og:description" content="Get in touch with Brilliant Memory Computers for laptop sales, custom PC builds, computer repair, and tech support. Fast and reliable support." />
                <meta property="og:url" content="https://www.brilliantmemorycomputers.in/contact-us" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Brilliant Memory Computers" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Contact Us | Brilliant Memory Computers – Laptop & PC Sales" />
                <meta name="twitter:description" content="Contact Brilliant Memory Computers for laptop sales, PC builds, repairs & support. Quick assistance available." />

                {/* JSON-LD Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            "name": "Brilliant Memory Computers",
                            "url": "https://www.brilliantmemorycomputers.in/contact-us",
                          "image": `https://www.brilliantmemorycomputers.in${LogoImg.src}`,
                            "description": "Contact Brilliant Memory Computers for laptop sales, custom PC builds, computer repair, and tech support.",
                            "telephone": "+91-7788996684",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Shop No 2, GF 1/L, Blackers Road Gaiety Palace, Anna Salai",
                                "addressLocality": "Chennai",
                                "addressRegion": "Tamil Nadu",
                                "postalCode": "600002",
                                "addressCountry": "IN"
                            },
                            "openingHours": "Mo-Sa 10:00-20:00",
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+91-7788996684",
                                "contactType": "customer service",
                                "areaServed": "IN",
                                "availableLanguage": ["English", "Tamil"]
                            }
                        }),
                    }}
                />
            </Head>

            {/* Page Content */}
            <section>
                <div className="container mx-auto px-4 py-12">
                    <Breadcrumb items={breadcrumbItems} />
                </div>

                <div className='py-12 px-4 sm:px-8 max-w-7xl mx-auto'>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                        {/* Contact Info */}
                        <div className="space-y-10">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">CUSTOMER SERVICE</h3>
                                <div className="flex items-start gap-3 text-sm text-gray-700 mt-2">
                                    <Phone size={16} className="text-indigo-600 mt-1" />
                                    <p className="text-gray-400">+91-7788996684</p>
                                </div>
                                <div className="flex items-start gap-3 text-sm text-gray-700 mt-2">
                                    <Mail size={16} className="text-indigo-600 mt-1" />
                                    <p className="text-gray-400">Info@brilliantmemorycomputers.in</p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">STORE LOCATOR</h3>
                                <p className="text-sm text-gray-700">Shop No 2, GF 1/L, Blackers Road</p>
                                <p className="text-sm text-gray-700">Gaiety Palace, Anna Salai, Chennai – 600002</p>
                                <p className="text-sm text-gray-700">(Near Casino Theatre, Next to Ola Electric Store)</p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="md:col-span-2 bg-white rounded-lg shadow p-6">
                            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                               We're Here to Help – Fast & Friendly Support
                            </h2>
                            <p className="text-gray-600 mb-6 max-w-2xl">
                                At Brilliant Memory Computers, your satisfaction is our priority. Whether you need help choosing the right laptop, want a custom-built PC, or require reliable computer repair and technical support - our team is ready to assist you.
                            </p>

                            <form className="space-y-5">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-800 mb-1">Name</label>
                                    <input type="text" placeholder="Name" className="w-full border border-gray-200 px-4 py-2 rounded focus:ring focus:ring-blue-400" />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-800 mb-1">Email</label>
                                    <input type="email" placeholder="Email" className="w-full border border-gray-200 px-4 py-2 rounded focus:ring focus:ring-blue-400" />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-800 mb-1">Message</label>
                                    <textarea rows={4} placeholder="Message" className="w-full border border-gray-200 px-4 py-2 rounded focus:ring focus:ring-blue-400" />
                                </div>

                                <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUs;
