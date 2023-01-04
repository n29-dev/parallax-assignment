import Head from "next/head";
import Layout from "components/layout";
import ProductGallery from "components/products";
import Hero from "components/hero";
import { ProductType } from "types/common";
import { GetStaticProps } from "next";
import requestApi from "network/requestApi";

interface ProductsPageProps {
    products: ProductType[];
}

export default function ProductsPage({ products }: ProductsPageProps) {
    return (
        <>
            <Head>
                <title>Products</title>
                <meta name="description" content="Assignment Project" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Layout>
                <ProductGallery products={products} />
            </Layout>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const result = await requestApi<ProductType[]>({ url: "/products", method: "get" });
    let data = result.data;

    if (data === undefined) {
        data = [];
    }

    return {
        props: {
            products: data,
        },
    };
};
