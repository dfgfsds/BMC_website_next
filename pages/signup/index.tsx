import SignupForm from '@/components/SignupForm';
import Head from 'next/head';

export default function SignupPage() {
  return <>
    <Head>
      <title>Sign Up | BMC | Create Your Account</title>
      <meta
        name="description"
        content=" Create your BMC account to enjoy faster checkout, order tracking, exclusive updates, and a personalized shopping experience."
      />
      <link rel="canonical" href="https://www.brilliantmemorycomputers.in/signup"></link>
        <meta name="robots" content="noindex, nofollow"/>
    </Head>
    <SignupForm />
  </>;
}
