import Head from "next/head";
import Layout from "components/layout";
import SearchResults from "components/search";
import searchProducByName from "lib/searchProductByName";
import { useRouter } from "next/router";
import { ProductType } from "types/common";
import { GetStaticProps } from "next";
import requestApi from "network/requestApi";

interface SearchSearchResultPageProps {
    products: ProductType[];
}

export default function SearchResultPage({ products }: SearchSearchResultPageProps) {
    const router = useRouter();
    const { productName } = router.query;
    const searchString = productName as string;

    const filteredProducts = searchProducByName(searchString, products);

    return (
        <>
            <Head>
                <title>Parallax Logic</title>
                <meta name="description" content="Assignment Project" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Layout>
                <SearchResults products={filteredProducts} />
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
        revalidate: 10,
    };
};
