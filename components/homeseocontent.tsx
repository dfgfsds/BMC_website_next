{/* ===================== READ MORE SECTION ===================== */ }
import { useState } from "react";

export default function HomeSeoSection() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Your existing code above... */}

            {/* Collapsible Info Section */}
            <div className="bg-gray-50 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl">


                    {/* HIDDEN CONTENT */}
                    <div
                        className={`transition-all duration-500 overflow-hidden ${open ? "max-h-[4000px] mt-6" : "max-h-0"
                            }`}
                    >

                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-start my-4">
                            Your One-Stop Computer Store for Every Need
                        </h2>

                        {/* FIRST PARAGRAPH ALWAYS VISIBLE */}
                        <p className="text-gray-700 text-lg text-start leading-relaxed">
                            At Brilliant Memory Computers, we offer a complete range of IT products and solutions, including:
                        </p>

                        <div className="text-gray-700 text-lg text-start space-y-4 leading-relaxed">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-start my-4 ">Brand-New Laptops & Desktop Computers</h2>
                            <p>
                                Explore the latest laptops and desktops from leading brands like Dell, HP, Lenovo, Acer, Asus, and more. Choose from business laptops, student laptops, ultra-thin notebooks, and productivity desktops all under one roof.
                            </p>

                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-start my-4 ">Gaming Laptops & High-Performance Gaming Computers</h2>
                            <p>Unleash your gaming power with our latest range of:</p>

                            <ul className="list-disc text-start ml-6 space-y-1">
                                <li>High refresh-rate gaming laptops</li>
                                <li>RGB gaming desktops</li>
                                <li>Liquid-cooled systems</li>
                                <li>High-end graphics card builds</li>
                            </ul>

                            <p>
                                If you’re searching specifically for gaming PC build in Chennai, we build top-tier systems tailored to your gaming style and performance needs.
                            </p>

                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-start my-4">Custom Build PCs – Build Your Dream PC Online</h2>
                            <p>Want a system custom-made for your workflow or gaming setup?
                                We offer complete custom build PCs, allowing you to:</p>
                            <ul className="list-disc ml-6 space-y-1">
                                <li>Build PC online with personalized configurations</li>
                                <li>Choose every component yourself</li>
                                <li>Get expert suggestions from the top PC builders in Chennai</li>
                                <li>Optimize performance for editing, gaming, design, software development & more</li>
                            </ul>
                            <p>Perfect for creators, gamers, and professionals who need maximum performance.</p>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-start my-4">Reliable Refurbished Laptops & Computers</h2>
                            <p>Brilliant Memory Computers (BMC) provides certified and quality-tested refurbished laptops and refurbished computers at the best prices.</p>
                            <h5>Why choose our refurbished systems?</h5>
                            <ul className="list-disc ml-6 space-y-1">
                                <li>100% quality checked</li>
                                <li>Warranty included</li>
                                <li>Performance optimized</li>
                                <li>Budget-friendly pricing</li>
                            </ul>
                            <p>Perfect for students, office use, and work-from-home setups.</p>

                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-start my-4">IT Accessories & Computer Peripherals</h2>
                            <p>We also supply a wide range of reliable IT accessories including:</p>
                            <ul className="list-disc ml-6 space-y-1">
                                <li>Keyboards, mouse, headsets</li>
                                <li>SSD, RAM, graphics cards</li>
                                <li>Monitors, routers, cables, adapters</li>
                                <li>Gaming accessories & RGB components</li>
                                <li>Laptop chargers & batteries</li>
                            </ul>
                            <p>Everything you need is available at the best computer accessories shop in Chennai.</p>

                            <p className="text-3xl sm:text-4xl font-bold text-gray-900 text-start my-4">
                                Certified Refurbished Laptops and Computers
                            </p>
                            <p>Apart from brand-new products, we also offer high-quality refurbished laptops and refurbished computers at affordable prices. Every refurbished system undergoes multiple levels of testing, component replacement, cleaning, and optimization to ensure that it performs like new.</p>
                            <p>Our refurbished systems are ideal for students, small businesses, home offices, and individuals who want reliable performance without spending excessively. With warranty support, quality assurance, and affordable pricing, Brilliant Memory Computers has become a trusted destination for refurbished IT products.</p>

                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-start my-4">Why Brilliant Memory Computers Is Chennai’s Most Trusted IT Store</h2>

                            <ul className="list-disc ml-6 space-y-1">
                                <li>Genuine Products</li>
                                <li>Best Price Guarantee</li>
                                <li>Expert Support & Consultation</li>
                                <li>Fast Delivery & Quick Service</li>
                                <li>Custom PC Build Specialists</li>
                                <li>Warranty + After-Sales Support</li>
                            </ul>

                            <p>Whether you want to buy a laptop, build a PC online, or upgrade your existing system, we make the entire process easy and affordable.
                            </p>


                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-start my-4">We Build Performance. You Experience Power.</h2>
                            <p>From casual users to hardcore gamers, Brilliant Memory Computers transforms your needs into high-performance machines. As one of the leading PC build shops in Chennai, we deliver PCs that outperform and outlast.</p>
                        </div>
                    </div>

                    {/* READ MORE / LESS BUTTON */}
                    <div className="mt-6 text-center">
                        <button
                            onClick={() => setOpen(!open)}
                            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
                        >
                            {open ? "Read Less" : "Read More"}
                        </button>
                    </div>
                </div>
            </div>

            {/* ====================== END READ MORE SECTION ====================== */}

            {/* Your remaining code below... */}
        </>
    );
}
