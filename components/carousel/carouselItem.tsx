import { FC } from "react";
import { CarouselItemData } from ".";
import Image from "next/image";

interface CarouselItemProps extends CarouselItemData {
    next: number;
    prev: number;
    checked?: boolean;
}

const CarouselItem: FC<CarouselItemProps> = ({ image, title, id, prev, next, checked }) => {
    return (
        <>
            {/* carousel item */}
            <input
                className="carousel-open"
                type="radio"
                id={`carousel-${id}`}
                name="carousel"
                aria-hidden="true"
                hidden
                checked={checked}
            />
            <div className="carousel-item absolute opacity-0" style={{ height: "50vh" }}>
                <div className="h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center relative">
                    <Image
                        src={image}
                        alt="bg"
                        className="absolute w-full h-full z-[-1] object-cover"
                        width={1920}
                        height={1080}
                    />
                    <div className="container mx-auto">
                        <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                            <p className="text-2xl font-medium text-white my-4">{title}</p>
                            <a
                                className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed text-white hover:border-white"
                                href="#"
                            >
                                view product
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CarouselItem;
