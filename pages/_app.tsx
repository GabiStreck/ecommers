import { AppProps } from "next/app";
import * as React from "react";
import '@/styles/global.css'
function MyApp({
    Component,
    pageProps,
}: AppProps<any>) {
    return (
        <Component {...pageProps} />
    )
}
export default MyApp;