import Head from "next/head";
import Layout from "components/layout";
import SearchResults from "components/search";
import { useProductContext } from "context/productContext";
import searchProducByName from "lib/searchProductByName";
import { useRouter } from "next/router";

export default function SearchResultPage() {
    const { products } = useProductContext();
    const router = useRouter();
    const { productName } = router.query;
    const searchString = productName as string;

    const filteredProducts = searchProducByName(searchString, products!.value);

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
