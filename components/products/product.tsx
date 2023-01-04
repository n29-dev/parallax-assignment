import { FC } from "react";
import Image from "next/image";
import { ProductType } from "types/common";
import Link from "next/link";

interface ProductProps {
    productData: ProductType;
}

const Product: FC<ProductProps> = ({ productData }) => {
    const { image, category, title, price,id } = productData;
    return (
        <div className="w-full bg-gray-100 overflow-hidden rounded">
            <div className="block relative h-[300px] overflow-hidden">
                <Image
                    width={300}
                    height={300}
                    alt={title}
                    className="object-cover object-center w-full h-full block hover:scale-[1.1] transition-[transform] duration-300"
                    src={image}
                />
            </div>
            <div className="p-4 ">
                <h3 className="text-gray-500 text-xs tracking-widest capitalize title-font mb-1">{category}</h3>
                <h2 className="text-gray-800 title-font text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                    <Link href={`/${id}`}>{title}</Link>
                </h2>
                <p className="mt-1">{price}</p>
            </div>
        </div>
    );
};

export default Product;
