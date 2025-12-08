{/* ===================== READ MORE SECTION ===================== */ }
import { useState } from "react";

export default function AboutBrefContent() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Your existing code above... */}

            {/* Collapsible Info Section */}
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="w-full">


                    {/* HIDDEN CONTENT */}
                    <div
                        className={`transition-all duration-500 overflow-hidden ${open ? "max-h-[4000px] mt-6" : "max-h-0"
                            }`}
                    >
<section className="w-full bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
  <div className=" mx-auto">


    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-wide">
        What We Offer
      </h2>
      <span className="block w-28 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></span>
      <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
        Brilliant Memory Computers provides a complete range of systems and components for every computing need.
      </p>
    </div>


    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


      <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Brand-New Laptops & Desktops</h3>
        <p className="text-gray-600 leading-relaxed">
          Laptops and desktops from top brands — durable, reliable, and built for high performance.
        </p>
      </div>


      <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom PC Build Services</h3>
        <p className="text-gray-600 leading-relaxed">
          Design and build custom PCs for gaming, editing, programming, or professional use — choose your components online.
        </p>
      </div>


      <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Used & Refurbished Gaming PCs</h3>
        <p className="text-gray-600 leading-relaxed">
          High-performance tested gaming desktops and laptops optimized for smooth gameplay at affordable prices.
        </p>
      </div>


      <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Refurbished Laptops & Desktops</h3>
        <p className="text-gray-600 leading-relaxed">
          Quality-certified refurbished systems for students, professionals, and home use — fully tested & upgraded.
        </p>
      </div>


      <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">IT Accessories</h3>
        <p className="text-gray-600 leading-relaxed">
          Keyboards, mouse devices, SSDs, RAM, chargers, CCTV cameras, routers, UPS systems & more.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Speakers & Home Theater Systems</h3>
        <p className="text-gray-600 leading-relaxed">
          High-quality speakers, Bluetooth audio systems & soundbars delivering powerful and immersive sound.
        </p>
      </div>

    </div>
  </div>
</section>
<section className="w-full bg-white py-20 px-6 md:px-12 lg:px-24">
  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
   Why Customers Choose Us
    </h2>

    <span className="block w-24 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></span>

    <p className="text-gray-700 mt-6 text-lg leading-relaxed max-w-3xl mx-auto">
      As one of Chennai’s most trusted computer stores, customers rely on us for genuine products, expert recommendations, custom PC building, competitive prices, and excellent after-sales support. From entry-level systems to high-end gaming builds, we provide solutions tailored to every requirement.
    </p>

  </div>
</section>



<section className="w-full bg-gray-50 py-20 px-6 md:px-12 lg:px-24">
  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
      Your Trusted Tech Partner
    </h2>

    <span className="block w-24 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></span>

    <p className="text-gray-700 mt-6 text-lg leading-relaxed max-w-3xl mx-auto">
      Brilliant Memory Computers continues to be the go-to destination for powerful laptops,
      desktops, and custom-built PCs. Whether you're looking for the best laptop store in Chennai,
      or a reliable place for refurbished and custom gaming systems —
      we deliver the perfect balance of performance, quality, and value.
    </p>

  </div>
</section>
                      
                    
                    </div>

                    {/* READ MORE / LESS BUTTON */}
                    <div className="mt-6 bg-white text-center">
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
