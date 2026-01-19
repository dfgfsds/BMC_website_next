import Head from 'next/head';
import Profile from '@/components/Profile';

export default function LoginPage() {
    return <>
       <Head>
        <title>My Account | BMC | Profile & Orders</title>
        <meta
          name="description"
          content="Access your BMC account to manage your profile, view orders, track shipments, and update personal information securely in one place."
        />
      </Head>
    <Profile />
    </>;
}
