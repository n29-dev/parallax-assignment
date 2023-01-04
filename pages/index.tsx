import Head from "next/head";
import Layout from "components/layout";
import ProductGallery from "components/products";
import Hero from "components/hero";

export default function Home() {
    return (
        <>
            <Head>
                <title>Parallax Logic</title>
                <meta name="description" content="Assignment Project" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Layout>
                <Hero />
                <ProductGallery />
            </Layout>
        </>
    );
}
