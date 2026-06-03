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

                <meta
                    name="google-site-verification"
                    content="3owA_I9wUz7cdn9qS_A1lu8n40Ni-Hs6OsymyDN8yH0"
                />



                <meta name="p:domain_verify" content="7c93b39c555c6cf820caf0639b708cc1" />

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
