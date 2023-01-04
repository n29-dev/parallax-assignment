import { FC } from "react";
import Image from "next/image";
import { ProductType } from "types/common";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

interface ProductProps {
    productData: ProductType;
}

const Product: FC<ProductProps> = ({ productData }) => {
    const { image, title, price, id } = productData;
    return (
        <div className="w-full p-6 flex flex-col">
            <Link href={`/${id}`} className="block">
                <Image className="hover:grow hover:shadow-lg object-cover w-[300px] h-[300px]" src={image} width={300} height={300} alt={title} />
                <div className="pt-3 flex items-center justify-between">
                    <p className="">{title}</p>
                    <FontAwesomeIcon icon={faHeart} />
                </div>
                <p className="pt-1 text-gray-900">£{price}</p>
            </Link>
        </div>
    );
};

export default Product;
