import { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import '@/styles/global.css';

function MyApp({ Component, pageProps }: AppProps<any>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
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
  );
}
export default MyApp;
