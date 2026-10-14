import "@/styles/globals.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import type { AppProps } from "next/app";
import Loading from "@/components/Loading";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Script from "next/script";

const FloatingWhatsApp = dynamic(() => import("@/components/FloatingWhatsApp"), { ssr: false });
const FloatingCallButton = dynamic(() => import("@/components/FloatingCallButton"), { ssr: false });
const DownloadAppPopup = dynamic(() => import("@/components/DownloadAppPopup"), { ssr: false });

export default function App({ Component, pageProps }: AppProps) {
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
      <Script
        id="microsoft-clarity"
        strategy="afterInteractive"
      >
        {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){
                (c[a].q=c[a].q||[]).push(arguments)
              };
              t=l.createElement(r);
              t.async=1;
              t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];
              y.parentNode.insertBefore(t,y);
            })(window,document,"clarity","script","y075j96ypz");
          `}
      </Script>

      <Layout>
        {isLoading && <Loading />}
        <Component {...pageProps} />
        <FloatingCallButton />
        <FloatingWhatsApp />
        <DownloadAppPopup />
      </Layout>
    </>
  );
}
