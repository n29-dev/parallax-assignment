import Head from "next/head";
import Layout from "components/layout";
import ProductDetail from "components/products/productDetail";
import { useRouter } from "next/router";
import { useProductContext } from "context/productContext";

export default function ProductDetailPage() {
    const router = useRouter();
    const { productId } = router.query;
    const id = Number(productId as string);
    const { products } = useProductContext();
    let productData = products?.value.find((product) => product.id === id);

    return (
        <>
            <Head>
                <title>{productData?.title}</title>
                <meta name="description" content="Assignment Project" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Layout>
                <ProductDetail productData={productData!} />
            </Layout>
        </>
    );
}
