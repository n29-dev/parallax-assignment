import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Poppins } from "@next/font/google";
import ProductsContextProvider from "context/productContext";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ProductsContextProvider>
            <style jsx global>
                {`
                    :root {
                        --font-inter: ${inter.style.fontFamily};
                    }
                `}
            </style>
            <Component {...pageProps} />
        </ProductsContextProvider>
    );
}
