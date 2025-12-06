'use client';

import Breadcrumb from "./Breadcrumb";

const AboutUs = () => {
    const breadcrumbItems = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/aboutUs', isActive: true },
    ];

    return (
        <section >
            <div className="container mx-auto px-4 py-12">
                <Breadcrumb items={breadcrumbItems} />
            </div>
            <div className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
                        About Brilliant Memory Computers
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                        <span className="block mb-4">
                            <strong>Brilliant Memory Computers</strong> is your destination for quality products at great prices.
                        </span>
                        We believe in delivering exceptional service and creating a seamless shopping experience for every customer.
                        Our mission is to bring you the best in technology with a focus on reliability, value, and customer satisfaction.
                    </p>

                    <div className="mt-10 flex justify-center">
                        <div className="w-32 h-1 bg-blue-600 rounded"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
