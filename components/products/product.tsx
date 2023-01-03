import { FC } from "react";
import Image from "next/image";
import { ProductType } from "types/common";

interface ProductProps {
    productData: ProductType;
}

const Product: FC<ProductProps> = ({ productData }) => {
    const { image, category, title, price } = productData;
    return (
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
                <Image
                    width={300}
                    height={300}
                    alt="product"
                    className="object-cover object-center w-full h-full block"
                    src={image}
                />
            </a>
            <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
                <h2 className="text-gray-800 title-font text-lg font-medium">{title}</h2>
                <p className="mt-1">{price}</p>
            </div>
        </div>
    );
};

export default Product;
