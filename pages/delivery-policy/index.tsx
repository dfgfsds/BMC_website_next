import Head from "next/head";

export default function DeliveryPolicy() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Delivery Policy",
    url: "https://www.brilliantmemorycomputers.in/delivery-policy",
    description:
      "Delivery policy of Brilliant Memory Computers Chennai explaining delivery areas, timelines, charges, and order tracking details.",
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
        <title>Second Hand Desktops in Chennai | Delivery Policy</title>

        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        <meta
          name="description"
          content="Learn about our delivery policy for second hand desktops in Chennai, including delivery areas, timelines, charges, and order tracking details."
        />

        <meta
          name="keywords"
          content="delivery policy Brilliant Memory Computers, second hand desktops delivery Chennai, refurbished computer delivery Chennai, computer shop delivery Chennai, IT store delivery policy India"
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        <link
          rel="canonical"
          href="https://www.brilliantmemorycomputers.in/delivery-policy"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Second Hand Desktops in Chennai | Delivery Policy"
        />
        <meta
          property="og:description"
          content="Learn about our delivery policy for second hand desktops in Chennai, including delivery areas, timelines, charges, and order tracking details."
        />
        <meta
          property="og:url"
          content="https://www.brilliantmemorycomputers.in/delivery-policy"
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
          content="Second Hand Desktops in Chennai | Delivery Policy"
        />
        <meta
          name="twitter:description"
          content="Learn about our delivery policy for second hand desktops in Chennai, including delivery areas, timelines, charges, and order tracking details."
        />
        <meta
          name="twitter:image"
          content="https://www.brilliantmemorycomputers.in/wp-content/uploads/2024/01/banner.jpg"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </Head>

      <div className="bg-white p-5 shadow-md rounded-lg lg:p-20 max-w-5xl mx-auto my-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Delivery Policy
        </h1>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Delivery Policy for Desktops, Laptops & Accessories
            </h2>
            <p>
              <strong>Effective Date:</strong> Updated 2026
            </p>
          </div>

          <p>
            At Brilliant Memory Computers, we ensure that your orders for new and second hand desktops, laptops, and computer accessories are safely packed and delivered with care.
          </p>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              1. Delivery Coverage Areas
            </h3>
            <p>
              We provide express delivery across all areas of Chennai and standard courier shipping throughout Tamil Nadu and across India.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              2. Delivery Timelines
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Chennai Local Delivery:</strong> Same-day or next-day delivery depending on order time and stock availability.
              </li>
              <li>
                <strong>Tamil Nadu & Rest of India:</strong> 2 to 5 business days via reputed courier partners.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              3. Delivery Charges
            </h3>
            <p>
              Delivery charges are determined during checkout based on weight, distance, and chosen shipping method. Free delivery promotions may apply to select bulk or qualifying orders.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              4. Packaging & Safety
            </h3>
            <p>
              All second hand desktops, refurbished laptops, and delicate electronic hardware undergo rigorous stress tests and multi-layer shockproof protective packaging before dispatch.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              5. Order Tracking & Support
            </h3>
            <p>
              Once your shipment is dispatched, a consignment tracking number will be provided via SMS/WhatsApp/email. For delivery queries, contact our support team at +91-7788996684 or info@brilliantmemorycomputers.in.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
