// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* <title>Best laptops & Computer Shop in Chennai | BMC</title>
                <meta
                    name="description"
                    content="Shop refurbished laptops, gaming computers & accessories online. Best computer shop in Chennai for budget deals, fast delivery & expert support."
                /> */}
                <link rel="icon" href="/favicon.ico" />

                <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
                <meta
                    name="google-site-verification"
                    content="3owA_I9wUz7cdn9qS_A1lu8n40Ni-Hs6OsymyDN8yH0"
                />

                {/* Google Tag (gtag.js) */}
                <script
                    src="https://www.googletagmanager.com/gtag/js?id=G-20541JBJRX"

                />
                <script id="google-analytics"
                    dangerouslySetInnerHTML={{
                        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-20541JBJRX');
          `}}
                />
                {/* End Google Tag */}

                {/* google ads code start */}
                {/* Google Ads Global Site Tag */}
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=AW-17447812618"
                />

                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-17447812618');
            `,
                    }}
                />
                {/* Google Ads code end */}
                {/* Meta Pixel Code */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1081977160760377');
            fbq('track', 'PageView');
          `}}
                />

                {/* End Meta Pixel Code */}

            </Head>
            <body>
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-5X5MFTL5"
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    />
                </noscript>
                {/* End Google Tag Manager (noscript) */}


                <noscript>
                    <img
                        height="1"
                        width="1"
                        style={{ display: "none" }}
                        src="https://www.facebook.com/tr?id=1081977160760377&ev=PageView&noscript=1"
                        alt="facebook-pixel"
                    />
                </noscript>

                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
