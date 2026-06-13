'use client';

import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const FloatingWhatsApp: React.FC = () => {
    const pathname = usePathname();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 640);
        checkMobile();

        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const phoneNumber = '917788996684';

    const message = encodeURIComponent(
        `👋 Welcome to Brilliant Memory Computers!\n\nThank you for contacting us. We specialize in Laptop Sales & Service, Desktop Sales & Service, Printer Solutions, CCTV Installation, Networking, Computer Accessories, Chip-Level Repairs, and IT Support Services.\n\nHow can we help you today?\n\n📞 Call: +91 7788996684\n🌐 Website: https://www.brilliantmemorycomputers.in\n\nOur team will get back to you shortly.`
    );

    const isProductPage = pathname?.startsWith('/productLandingPage/');

    const bottomClass = isProductPage && isMobile ? 'bottom-20' : 'bottom-5';

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`fixed ${bottomClass} left-5 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300`}
        >
            <FaWhatsapp className="w-6 h-6" />
        </a>
    );
};

export default FloatingWhatsApp;