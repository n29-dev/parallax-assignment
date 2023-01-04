import { FC } from "react";
import { ProductType } from "types/common";
import Product from "components/products/product";

interface SearchResultsProps {
    products: ProductType[];
}

const SearchResults: FC<SearchResultsProps> = ({ products }) => {
    return (
        <section className="bg-white py-8">
            <div className="pt-4 pb-12 container mx-auto">
                <h1 className="text-[24px]">Found {products.length} products for this keyword</h1>
                <div className="grid grid:grid-cols-[1fr,_1fr] md:grid-cols-[1fr,_1fr,_1fr] lg:grid-cols-[1fr,_1fr,_1fr,_1fr] gap-5">
                    {products.map((productData) => {
                        return <Product productData={productData} key={productData.id} />;
                    })}
                </div>
            </div>
        </section>
    );
};

export default SearchResults;
