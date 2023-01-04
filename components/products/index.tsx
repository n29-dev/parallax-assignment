import { FC } from "react";
import useFetch from "hooks/useFetch";
import { ProductType } from "types/common";
import Product from "./product";

const ProductsGallery: FC = () => {
    const { data, isError, isSuccess, loading, error } = useFetch<ProductType[]>({
        url: "/products ",
        method: "get",
    });
    console.log(data);

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="grid grid-cols-[1fr,_1fr,_1fr,_1fr] gap-5">
                    {isError && <div>{error!.message}</div>}
                    {isSuccess &&
                        data?.map((productData) => {
                            return <Product productData={productData} key={productData.id} />;
                        })}
                </div>
            </div>
        </section>
    );
};

export default ProductsGallery;
