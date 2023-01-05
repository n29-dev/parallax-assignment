import Head from "next/head";
import Layout from "components/layout";
import ProductDetail from "components/products/productDetail";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import requestApi from "network/requestApi";
import { ProductType } from "types/common";
import Loader from "components/common/loader";

interface ProductDetailPageProps {
    products: ProductType[];
}

export default function ProductDetailPage({ products }: ProductDetailPageProps) {
    const router = useRouter();
    const { productId } = router.query;
    const id = Number(productId as string);
    console.log(products);
    let productData = products.find((product) => product.id === id);

    if (productData === undefined) {
        return (
            <>
                <Head>
                    <title>Product not found</title>
                    <meta name="description" content="Assignment Project" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>
                <Layout>{router.isFallback ? <Loader /> : <h1 className="text-2xl">Product not found</h1>}</Layout>
            </>
        );
    }

    return (
        <>
            <Head>
                <title>{productData?.title}</title>
                <meta name="description" content="Assignment Project" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Layout>{router.isFallback ? <Loader /> : <ProductDetail productData={productData} />}</Layout>
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const result = await requestApi<ProductType[]>({ url: "/products", method: "get" });
    const paths = result!.data!.map((product) => {
        return {
            params: { productId: `${product.id}` },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

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
        revalidate: 10,
    };
};
