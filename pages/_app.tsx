import "@/styles/globals.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CategoriesProvider } from "@/context/CategoriesContext";
import { UserProvider } from "@/context/UserContext";
import { CartItemProvider } from "@/context/CartItemContext";
import { ProductsProvider } from "@/context/ProductsContext";
import Layout from "@/components/Layout";
import { VendorProvider } from "@/context/VendorContext";
import type { AppProps } from "next/app";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import AnimatedCursor from "@/components/AnimatedCursor";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Loading from "@/components/Loading";
import { useRouter } from "next/router";
import FloatingCallButton from "@/components/FloatingCallButton";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  useEffect(() => {
    const applyClickEffect = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches("button, a, .custom-cursor")) {
        target.classList.add("cursor-click");
        setTimeout(() => {
          target.classList.remove("cursor-click");
        }, 200);
      }
    };

    document.addEventListener("mousedown", applyClickEffect);
    return () => {
      document.removeEventListener("mousedown", applyClickEffect);
    };
  }, []);

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <>
      <Head>
        <title>Best Laptops & Computer Shop in Chennai | BMC</title>
        <meta
          name="description"
          content="Shop refurbished laptops, gaming computers & accessories online. Best computer shop in Chennai for budget deals, fast delivery & expert support."
        />
      </Head>

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-20541JBJRX"
        strategy="afterInteractive"
      />

      <Script
        id="google-analytics"
        strategy="afterInteractive"
      >
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-20541JBJRX');
    `}
      </Script>

      {/* Google Ads */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17447812618"
        strategy="lazyOnload"
      />

      <Script
        id="google-ads"
        strategy="lazyOnload"
      >
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-17447812618');
    `}
      </Script>

      {/* Facebook Pixel */}
      <Script
        id="facebook-pixel"
        strategy="lazyOnload"
      >
        {`
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;
      n.push=n;
      n.loaded=!0;
      n.version='2.0';
      n.queue=[];
      t=b.createElement(e);
      t.async=!0;
      t.src=v;
      s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s);
      }(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');

      fbq('init', '1081977160760377');
      fbq('track', 'PageView');
    `}
      </Script>

      {/* Razorpay Checkout */}
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
      />

      <Layout>
        {isLoading && <Loading />}
        <Component {...pageProps} />
        <FloatingCallButton />
        <FloatingWhatsApp />
      </Layout>
    </>
  );
}
