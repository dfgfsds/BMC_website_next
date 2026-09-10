import Head from 'next/head';
import dynamic from 'next/dynamic';

const LoginForm = dynamic(() => import('@/components/LoginForm'), { ssr: false });

export default function LoginPage() {
    return (
        <>
            <Head>
                <title>Computer Shop in Chennai | Quality PCs at Great Prices</title>
                <meta
                    name="description"
                    content="Login to your account at a trusted computer shop in Chennai. Manage orders, track purchases, view details, and enjoy a seamless shopping experience."
                />
                <link rel="canonical" href="https://www.brilliantmemorycomputers.in/login"></link>
                <meta name="robots" content="index, follow" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Computer Shop in Chennai | Quality PCs at Great Prices" />
                <meta property="og:description" content="Login to your account at a trusted computer shop in Chennai. Manage orders, track purchases, view details, and enjoy a seamless shopping experience." />
                <meta property="og:url" content="https://www.brilliantmemorycomputers.in/login" />
                <meta property="og:site_name" content="Brilliant Memory Computers" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Computer Shop in Chennai | Quality PCs at Great Prices" />
                <meta name="twitter:description" content="Login to your account at a trusted computer shop in Chennai. Manage orders, track purchases, view details, and enjoy a seamless shopping experience." />
            </Head>
            <LoginForm />
        </>
    );
}
