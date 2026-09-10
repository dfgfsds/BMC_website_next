import Cart from '@/components/Cart';
import Head from 'next/head';

export default function CartPage() {
    return <>
        <Head>
            <title>Computer Wholesale Market Chennai | Shopping Cart</title>
            <meta
                name="description"
                content="Explore great computer deals in Chennai’s wholesale market. Check your selected products, manage your cart, and place your order with ease."
            />
            <link rel="canonical" href="https://www.brilliantmemorycomputers.in/cart"></link>
            <meta name="robots" content="index, follow" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Computer Wholesale Market Chennai | Shopping Cart" />
            <meta property="og:description" content="Explore great computer deals in Chennai’s wholesale market. Check your selected products, manage your cart, and place your order with ease." />
            <meta property="og:url" content="https://www.brilliantmemorycomputers.in/cart" />
            <meta property="og:site_name" content="Brilliant Memory Computers" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Computer Wholesale Market Chennai | Shopping Cart" />
            <meta name="twitter:description" content="Explore great computer deals in Chennai’s wholesale market. Check your selected products, manage your cart, and place your order with ease." />
        </Head>
        <Cart />

    </>;
}
