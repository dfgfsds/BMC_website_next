import Head from 'next/head';
import dynamic from 'next/dynamic';

const LoginForm = dynamic(() => import('@/components/LoginForm'), { ssr: false });

export default function LoginPage() {
    return (
        <>
            <Head>
                <title>Login | BMC | Secure Account Access</title>
                <meta
                    name="description"
                    content="Log in to your BMC account securely to access your orders, manage your profile, and enjoy a personalized shopping experience."
                />
                <link rel="canonical" href="https://www.brilliantmemorycomputers.in/login"></link>
                <meta name="robots" content="noindex, nofollow" />
            </Head>
            <LoginForm />
        </>
    );
}
