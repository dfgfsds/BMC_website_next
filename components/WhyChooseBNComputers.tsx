"use client";

import Image from "next/image";
import {
    Cpu,
    ShieldCheck,
    Wallet,
    Gamepad2,
    Wrench,
    CheckCircle,
} from "lucide-react";

export default function WhyChooseBNComputers() {
    return (
        <section className="py-12 sm:py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
                    <div className="relative rounded-2xl overflow-hidden shadow-lg h-[240px] sm:h-[320px] md:h-[420px]">
                        <Image
                            src="img/pc-2.png"
                            alt="Custom PC Build in Chennai - Brilliant Memory Computers"
                            width={600}
                            height={400}
                            className="w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

                        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white">
                            <h3 className="text-lg sm:text-2xl font-bold">
                                Custom PC Experts
                            </h3>
                            <p className="text-xs sm:text-sm opacity-90">
                                Trusted PC Builders in Chennai
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                            Why Choose Brilliant Memory Computers for Custom PC Build in Chennai?
                        </h2>

                        <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                            At Brilliant Memory Computers, we combine technical expertise with high-quality hardware to deliver performance-optimized custom PCs.
                        </p>

                        <div className="space-y-4 sm:space-y-5">
                            <Feature icon={<Cpu />} text="Expert configuration guidance" />
                            <Feature
                                icon={<ShieldCheck />}
                                text="Genuine branded components only"
                            />
                            <Feature
                                icon={<Wallet />}
                                text="Budget-friendly & performance-optimized builds"
                            />
                            <Feature
                                icon={<Gamepad2 />}
                                text="Gaming, editing, business & office solutions"
                            />
                            <Feature
                                icon={<Wrench />}
                                text="Professional cable management & airflow optimization"
                            />
                            <Feature
                                icon={<CheckCircle />}
                                text="Thorough stress testing before delivery"
                            />
                            <Feature
                                icon={<CheckCircle />}
                                text="Local Chennai support & after-sales service"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

function Feature({
    icon,
    text,
}: {
    icon: React.ReactNode;
    text: string;
}) {
    return (
        <div className="flex items-start gap-3 mt-0 p-2 rounded-xl transition">
            <div className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0">
                {icon}
            </div>
            <p className="text-sm sm:text-base font-medium text-gray-800">
                {text}
            </p>
        </div>
    );
}
