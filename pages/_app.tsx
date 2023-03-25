import { AppProps } from "next/app";
import Head from 'next/head'
import '@/styles/global.css'
import { useEffect, useState } from "react";

function MyApp({
    Component,
    pageProps,
}: AppProps<any>) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/icons/icon-96x96.png" />
                <meta name="theme-color" content="#ffffff" />
                <title>Feet on Fire</title>
            </Head>
            {loading ? (
                <div className="loader-container">
                    <div className="loader" />
                </div>
            ) : (
                <Component {...pageProps} />
            )}
        </>
    )
}
export default MyApp;