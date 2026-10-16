import { useState } from "react";
import {
    ChevronDown,
    CheckCircle2,
    ShieldCheck,
    Cpu,
    Laptop,
    Wrench,
    Sparkles,
    ShoppingBag,
    Monitor,
    Award
} from "lucide-react";

export default function HomeSeoSection() {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full max-w-5xl mx-auto mt-6 text-left">
            {/* COLLAPSIBLE CONTAINER */}
            <div
                className={`transition-all duration-700 ease-in-out overflow-hidden ${open ? "max-h-[9000px] opacity-100 mt-6" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="space-y-8">
                    {/* SECTION 1: Welcome to BMC */}


                    {/* SECTION 2: The Best Laptop & Computer Shop */}
                    {/* <div className="bg-gradient-to-br from-blue-50/60 via-white to-indigo-50/40 rounded-2xl p-6 sm:p-8 border border-blue-100 shadow-sm">
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200/60">
                                <Award className="w-3.5 h-3.5" />
                                Top Rated in Chennai
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-snug">
                            The Best Laptop & Computer Shop in Chennai
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            Looking for the best computer shop in Chennai? Brilliant Memory Computers is a trusted destination for brand-new laptops, custom-built PCs, refurbished systems, and computer accessories. As an established computer wholesale shop in Chennai, we serve students, professionals, gamers, and businesses with quality products at competitive prices.
                        </p>
                    </div> */}

                    {/* SECTION 3: Gaming Laptops & High-Performance Gaming Computers */}
                    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200/60">
                                <Cpu className="w-3.5 h-3.5" />
                                Ultimate Performance
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-snug">
                            Gaming Laptops & High-Performance Gaming Computers
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            Explore gaming laptops and desktops built for smooth gameplay and demanding games. Choose from high-refresh-rate gaming laptops, RGB gaming desktops, liquid-cooled systems, and high-end graphics card builds. If you’re looking for a gaming PC build in Chennai, Brilliant Memory Computers offers custom-built systems tailored to your gaming preferences and performance needs.
                        </p>
                    </div>

                    {/* SECTION 4: Custom Build PCs */}
                    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                                <Wrench className="w-3.5 h-3.5" />
                                Custom Configurations
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-snug">
                            Custom Build PCs – Build Your Dream PC Online
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                            Looking for a PC tailored to your work or gaming needs? As a computer wholesale shop in Chennai, Brilliant Memory Computers offers custom-built PCs with flexible configurations to suit different budgets and performance requirements.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
                            {[
                                "Build your PC online with personalized configurations.",
                                "Choose components to match your needs.",
                                "Get expert guidance from experienced PC builders in Chennai.",
                                "Configure systems for gaming, video editing, graphic design, and software development.",
                                "Create a PC that fits your workflow, creative projects, or gaming setup."
                            ].map((point, idx) => (
                                <div
                                    key={idx}
                                    className={`flex items-start gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100 ${idx === 4 ? "md:col-span-2" : ""
                                        }`}
                                >
                                    <div className="mt-0.5 w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="text-gray-800 text-sm sm:text-base leading-snug font-medium">
                                        {point}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SECTION 5: Reliable Refurbished Laptops & Computer Shop */}
                    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200/60">
                                <Laptop className="w-3.5 h-3.5" />
                                Certified & Tested
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-snug">
                            Reliable Refurbished Laptops & Computer Shop in Chennai
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                            Brilliant Memory Computers (BMC) offers quality-tested refurbished laptops and refurbished computers at affordable prices, making them a practical choice for students, office professionals, and work-from-home users.
                        </p>

                        <div className="bg-gradient-to-br from-amber-50/40 via-white to-gray-50 p-5 sm:p-6 rounded-xl border border-amber-100/80">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-amber-600" />
                                Why Choose Our Refurbished Systems?
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    "Quality-checked for reliable performance",
                                    "Warranty support for added confidence",
                                    "Tested and optimized for everyday use",
                                    "Budget-friendly options to suit your needs"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-2.5 text-gray-800 text-sm sm:text-base">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* SECTION 6: IT Accessories & Computer Peripherals */}
                    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-50 text-cyan-700 border border-cyan-200/60">
                                <ShoppingBag className="w-3.5 h-3.5" />
                                Genuine Peripherals
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-snug">
                            IT Accessories & Computer Peripherals at Chennai Computer Store
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                            Brilliant Memory Computers offers a wide range of IT accessories and computer peripherals for home, office, and gaming use. At our computer shop Chennai, you can find essential products for upgrades, replacements, and new PC setups.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                            {[
                                "Keyboards, mice, and headsets",
                                "SSDs, RAM, and graphics cards",
                                "Monitors, routers, cables, and adapters",
                                "Gaming accessories and RGB components",
                                "Laptop chargers and batteries"
                            ].map((acc, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-2.5 p-3 rounded-lg bg-gray-50 border border-gray-100 text-gray-800 text-sm sm:text-base font-medium"
                                >
                                    <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0"></div>
                                    <span>{acc}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-gray-600 text-sm sm:text-base italic bg-blue-50/50 p-4 rounded-xl border border-blue-100/60">
                            Visit our store to explore practical options at the best computer accessories shop in Chennai, with products to suit different needs and budgets.
                        </p>
                    </div>

                    {/* SECTION 7: Certified Refurbished Laptops & Computer Store */}
                    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center  justify-center gap-2 mb-3">
                            <span className="inline-flex items-center  gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-700 border border-teal-200/60">
                                <ShieldCheck className="w-3.5 h-3.5" />
                                Multi-Level Quality Check
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-snug">
                            Certified Refurbished Laptops and Computer Store in Chennai
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            Brilliant Memory Computers offers quality-tested refurbished laptops and computers at affordable prices. Each system undergoes testing, cleaning, necessary component replacement, and performance checks before sale. As a trusted refurbished laptops and computer store in Chennai, BMC provides carefully inspected systems with warranty support and options for students, professionals, and businesses looking for reliable, budget-friendly computing solutions.
                        </p>
                    </div>

                    {/* SECTION 8: Why Brilliant Memory Computers Is Chennai’s Most Trusted IT Store */}
                    <div className="bg-gradient-to-br from-gray-900 to-slate-800 text-white rounded-2xl p-6 sm:p-8 shadow-lg">
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-blue-200 border border-white/20">
                                <Award className="w-3.5 h-3.5 text-blue-400" />
                                Why Choose Us
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
                            Why Brilliant Memory Computers Is Chennai’s Most Trusted IT Store
                        </h2>
                        <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                            Brilliant Memory Computers is a customer-focused computer shop in Chennai, offering genuine products, competitive prices, expert guidance, and dependable IT support.
                        </p>

                        <div className="mb-6">
                            <h3 className="text-lg font-bold text-white mb-4">Why Choose BMC?</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                {[
                                    "Genuine products at competitive prices",
                                    "Expert advice and technical support",
                                    "Quick service and delivery options",
                                    "Custom PC build specialists",
                                    "Warranty and after-sales support"
                                ].map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-gray-200 text-sm sm:text-base font-medium"
                                    >
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p className="text-gray-300 text-sm sm:text-base pt-3 border-t border-white/10">
                            Whether you want to buy a laptop, build a PC online, or upgrade your existing system, BMC helps you choose the right solutions to match your needs and budget.
                        </p>
                    </div>

                    {/* SECTION 9: PC Shop Chennai for Performance Builds */}
                    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/60">
                                <Monitor className="w-3.5 h-3.5" />
                                Extreme Gaming & Workstations
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-snug">
                            PC Shop Chennai for Performance Builds & Powerful Gaming Experience
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            From everyday computing to demanding gaming, Brilliant Memory Computers builds PCs tailored to your needs. As a trusted PC build shop in Chennai, we create performance-focused systems for gaming, content creation, and professional workloads, helping you choose the right setup for your requirements and budget.
                        </p>
                    </div>
                </div>
            </div>

            {/* READ MORE / READ LESS BUTTON */}
            <div className="mt-8 text-center">
                <button
                    onClick={() => setOpen(!open)}
                    className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                    aria-expanded={open}
                >
                    <span>{open ? "Read Less" : "Read More"}</span>
                    <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${open ? "rotate-180" : "rotate-0 group-hover:translate-y-0.5"
                            }`}
                    />
                </button>
            </div>
        </div>
    );
}
