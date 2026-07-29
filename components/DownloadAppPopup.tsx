import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import LogoImg from "../public/img/bmc-logo.png";

const DownloadAppPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Show the popup after 5 seconds
        const hasClosed = sessionStorage.getItem('downloadAppPopupClosed');

        if (!hasClosed) {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        sessionStorage.setItem('downloadAppPopupClosed', 'true');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm transition-opacity">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center animate-in fade-in zoom-in duration-300">
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 hover:bg-gray-100 p-1 rounded-full transition-colors"
                    aria-label="Close"
                >
                    <X size={20} />
                </button>

                <div className="mb-4 mt-2 flex justify-center">
                    <Image
                        priority
                        src={LogoImg}
                        alt="logo"
                        className="w-36 h-auto md:w-52"
                        width={200}
                        height={80}
                    />
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-2">Get the BMC App!</h2>

                <p className="text-gray-600 mb-6 text-sm">
                    Enjoy exclusive offers, faster checkout, and a seamless shopping experience directly on your mobile device.
                </p>

                <a
                    href="https://play.google.com/store/apps/details?id=in.brilliantmemorycomputers.app&hl=en_IN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform hover:scale-105"
                    onClick={handleClose}
                >
                    <img
                        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                        alt="Get it on Google Play"
                        className="w-44 h-auto mx-auto"
                    />
                </a>
            </div>
        </div>
    );
};

export default DownloadAppPopup;
