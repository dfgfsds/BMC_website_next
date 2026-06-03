// "use client";
// import Head from "next/head";
// import { usePolicy } from "@/context/PolicyContext";

// // Utility function to replace placeholders in HTML string
// function replacePlaceholders(content: string, replacements: Record<string, string>) {
//   let updated = content;
//   Object.entries(replacements).forEach(([placeholder, value]) => {
//     const regex = new RegExp(placeholder.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), "gi");
//     updated = updated.replace(regex, value);
//   });
//   return updated;
// }

// function ShippingPolicy() {

//   const { policy, isLoading }: any = usePolicy();

//   // Dynamic content replacements
//   const replacements = {
//     "[Insert Date]": "10 June 2025",
//     "[currency]": "Rupees",
//     "[Your Country/State]": "Tamil Nadu, India",
//     "FT Digital Computer": "Brilliant Memory Computers",
//     "[your email address]": "Info@brilliantmemorycomputers.in",
//     "[your phone number]": "+91-7788996684",
//     "[insert email]": "Info@brilliantmemorycomputers.in",
//     "[insert courier names like Delhivery, Blue Dart, India Post, etc.]": "Delhivery, Blue Dart, India Post",
//     "[your business address]": "Shop No 2, GF 1/L, Blackers Road Gaiety Palace, Anna Salai, Chennai – 600002 (Near Casino Theatre, Next to Ola Electric Store)",
//   };

//   if (isLoading) {
//     return (
//       <div className="bg-white p-5 shadow-md rounded-lg lg:p-20 animate-pulse">
//         <div className="h-8 bg-gray-300 rounded w-1/2 mb-6"></div>
//         <div className="space-y-4">
//           {[...Array(4)].map((_, index) => (
//             <div key={index} className="h-4 bg-gray-200 rounded w-full"></div>
//           ))}
//           <div className="h-4 bg-gray-200 rounded w-3/4"></div>
//           <div className="h-4 bg-gray-200 rounded w-2/4"></div>
//         </div>
//       </div>
//     );
//   }

//   // Inject dynamic values into HTML string
//   const htmlContent = replacePlaceholders(policy?.data?.shipping_policy || "", replacements);

//   return (
//     <>
//       <Head>
//         <title>Shipping Policy | Custom PC & Laptop Delivery in Chennai & Tamil Nadu – Brilliant Memory Computers</title>
//         <meta
//           name="description"
//           content="Read the Shipping Policy of Brilliant Memory Computers for Custom PC builds, gaming PCs, laptops & accessories. Free shipping across Tamil Nadu with secure delivery and tracking support."
//         />
//         <link rel="canonical" href="https://www.brilliantmemorycomputers.in/shipping-policy" />
//       </Head>

//       <div className="bg-white p-5 shadow-md rounded-lg lg:p-20">
//         <h1 className="text-3xl font-bold mb-4 text-gray-800">Shipping Policy</h1>
//         <div
//           className="text-gray-600"
//           dangerouslySetInnerHTML={{ __html: htmlContent }}
//         />
//       </div>
//     </>

//   );
// }

// export default ShippingPolicy;


import Head from "next/head";

export default function ShippingPolicy() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Shipping Policy",
    url: "https://www.brilliantmemorycomputers.in/shipping-policy",
    description:
      "Shipping policy of Brilliant Memory Computers Chennai explaining delivery timelines, order processing, and shipping conditions.",
    publisher: {
      "@type": "Organization",
      name: "Brilliant Memory Computers",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chennai",
        addressCountry: "India",
      },
    },
  };

  return (
    <>
      <Head>
        <title>Shipping Policy | Brilliant Memory Computers Chennai</title>

        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        <meta
          name="description"
          content="Check the shipping policy of Brilliant Memory Computers Chennai for delivery timelines, order processing, and shipping details for laptops and accessories."
        />

        <meta
          name="keywords"
          content="shipping policy Brilliant Memory Computers, shipping policy Chennai, laptop delivery Chennai, computer shop shipping Chennai, order delivery laptops Chennai, IT store shipping policy India, Brilliant Memory Computers delivery terms, electronics shipping Chennai"
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        <link
          rel="canonical"
          href="https://www.brilliantmemorycomputers.in/shipping-policy"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Shipping Policy | Brilliant Memory Computers Chennai"
        />
        <meta
          property="og:description"
          content="Check the shipping policy of Brilliant Memory Computers Chennai including delivery timelines, order processing, and shipping details."
        />
        <meta
          property="og:url"
          content="https://www.brilliantmemorycomputers.in/shipping-policy"
        />
        <meta
          property="og:site_name"
          content="Brilliant Memory Computers"
        />
        <meta
          property="og:image"
          content="https://www.brilliantmemorycomputers.in/wp-content/uploads/2024/01/banner.jpg"
        />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:title"
          content="Shipping Policy | Brilliant Memory Computers Chennai"
        />
        <meta
          name="twitter:description"
          content="Learn about shipping timelines, delivery process, and order handling at Brilliant Memory Computers Chennai."
        />
        <meta
          name="twitter:image"
          content="https://www.brilliantmemorycomputers.in/wp-content/uploads/2024/01/banner.jpg"
        />

        <link
          rel="image_src"
          href="https://www.brilliantmemorycomputers.in/wp-content/uploads/2024/01/banner.jpg"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </Head>

      <div className="bg-white p-5 shadow-md rounded-lg lg:p-20">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Shipping Policy
        </h1>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Shipping and Delivery Policy
            </h2>
            <p>
              <strong>Effective Date:</strong> 27 June 2025
            </p>
          </div>

          <p>
            At Brilliant Memory Computers, we are committed to delivering your
            orders promptly and securely. Below are our shipping and delivery
            terms:
          </p>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              1. Shipping Locations
            </h3>
            <p>
              We ship to all serviceable areas within India and internationally,
              depending on courier availability. Please contact us to confirm if
              your location is eligible.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              2. Processing Time
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Orders are processed within 1–2 business days after payment
                confirmation.
              </li>
              <li>
                Orders placed on weekends or holidays are processed on the next
                business day.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              3. Estimated Delivery Time
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Domestic: 3–7 business days</li>
              <li>International: 7–21 business days</li>
            </ul>
            <p className="mt-2">
              Delivery times may vary due to external factors like weather or
              courier delays.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              4. Shipping Charges
            </h3>
            <p>
              Shipping charges are calculated at checkout based on order
              weight, size, and destination. Free shipping may apply during
              offers or promotions.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              5. Tracking Information
            </h3>
            <p>
              Tracking details will be shared via email or SMS once your order
              is shipped.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              6. Shipping Partners
            </h3>
            <p>
              We work with trusted courier services like Delhivery, Blue Dart,
              India Post, and others to ensure safe and timely delivery.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              7. Delayed or Failed Deliveries
            </h3>
            <p>
              If there are issues with delivery, email us at
              Info@brilliantmemorycomputers.in. We will assist in resolving it
              quickly.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              8. Incorrect Address
            </h3>
            <p>
              Please ensure accurate shipping details. Brilliant Memory
              Computers is not responsible for delays or losses due to incorrect
              addresses.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              9. Contact Us
            </h3>

            <div className="space-y-2">
              <p>
                <strong>Brilliant Memory Computers</strong>
              </p>

              <p>
                <strong>Email:</strong>{" "}
                Info@brilliantmemorycomputers.in
              </p>

              <p>
                <strong>Phone:</strong> +91-7788996684
              </p>

              <p>
                <strong>Address:</strong> Shop No 2, GF 1/L, Blackers Road
                Gaiety Palace, Anna Salai, Chennai – 600002 (Near Casino
                Theatre, Next to Ola Electric Store)
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

