import Cart from '@/components/Cart';
import Head from 'next/head';

export default function CartPage() {
    return <>
        <Head>
            <title>Cart | BMC | Review & Checkout</title>
            <meta
                name="description"
                content="Review your selected items in the BMC cart, update quantities, apply offers, and proceed securely to checkout."
            />
                 <link rel="canonical" href="https://www.brilliantmemorycomputers.in/cart"></link>
                   <meta name="robots" content="noindex, nofollow"/>
        </Head>
        <Cart />

    </>;
}
