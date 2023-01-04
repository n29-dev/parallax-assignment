import { FC, useEffect, useState } from "react";
import useFetch from "hooks/useFetch";
import { ProductType } from "types/common";
import Product from "./product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useProductContext } from "context/productContext";
import Modal from "components/common/modal";
import SearchBar from "components/common/searchbar";

const ProductsGallery: FC = () => {
    const { data, isError, isSuccess, error } = useFetch<ProductType[]>({
        url: "/products ",
        method: "get",
    });

    const { products } = useProductContext();

    useEffect(() => {
        if (isSuccess) {
            products?.set(data!);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    // search modal state
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <section className="bg-white py-8">
            <div className="pt-4 pb-12 container mx-auto">
                <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                    <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                        <a
                            className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
                            href="#"
                        >
                            Store
                        </a>

                        <div className="flex items-center" id="store-nav-content">
                            <button
                                className="pl-3 inline-block no-underline hover:text-black bg-gray-300 p-2 rounded"
                                onClick={() => {
                                    setModalOpen(true);
                                }}
                            >
                                <FontAwesomeIcon className="mx-auto" icon={faSearch} />
                            </button>
                        </div>
                    </div>
                </nav>
                <div className="grid grid-cols-[1fr,_1fr,_1fr,_1fr] gap-5">
                    {isError && <div>{error!.message}</div>}
                    {isSuccess &&
                        data?.map((productData) => {
                            return <Product productData={productData} key={productData.id} />;
                        })}
                </div>
            </div>
            <Modal
                isModalOpen={modalOpen}
                onOutsideClick={() => {
                    setModalOpen(false);
                }}
                classes="min-w-[400px] min-h-[300px]"
            >
                <SearchBar />
            </Modal>
        </section>
    );
};

export default ProductsGallery;
