'use client';


import AboutBrefContent from "./aboutBrefSection";
import Breadcrumb from "./Breadcrumb";


const AboutUs = () => {
    const breadcrumbItems = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about-us', isActive: true },
    ];

    return (
        <>

   
            <section >
                <div className="container mx-auto px-4 py-12">
                    <Breadcrumb items={breadcrumbItems} />
                </div>
                <div className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
                            About Us – Brilliant Memory Computers
                        </h2>
                        <div className="mt-2 mb-6 flex justify-center">
                            <div className="w-32 h-1 bg-blue-600 rounded"></div>
                        </div>
                        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                            Welcome to Brilliant Memory Computers is trusted as one of the best laptop stores in Chennai, offering high-performance laptops, desktops, custom PCs, and certified refurbished systems. With years of industry experience, we focus on delivering reliable technology, expert guidance, and cost-effective solutions for students, professionals, businesses, and gamers.
                        </p>


                    </div>
                </div>

            </section>
            <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-24">
                <div className="max-w-5xl mx-auto">


                    <div className="text-center mb-4">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-wide relative inline-block">
                            Who We Are
                            <span className="block w-24 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></span>
                        </h2>
                    </div>


                    <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">

                        <p className="text-gray-700 leading-relaxed text-lg mb-6">
                            We are a dedicated team of computer experts and professional custom PC builders committed
                            to providing genuine products and personalized support. Whether you need a brand-new laptop,
                            a high-power workstation, or a budget-friendly refurbished device, our store ensures quality,
                            value, and long-term performance.
                        </p>

                        <p className="text-gray-700 leading-relaxed text-lg">
                            Brilliant Memory Computers was founded with a clear mission: to provide customers with
                            the best selection of computers, accessories, and digital essentials under one roof.
                            Over the years, we have grown into a reputable store known for genuine products,
                            knowledgeable guidance, and customer-first service.
                        </p>

                    </div>

                  

                </div>
                  {/* <AboutBrefContent/> */}
            </section>

                    
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
               


        </>
    );
};

export default AboutUs;
