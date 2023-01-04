import { FC } from "react";
import CarouselItem from "./carouselItem";
import { StaticImageData } from "next/image";
import CarouselNavContainer from "./carouselNavContainer";

export interface CarouselItemData {
    image: StaticImageData;
    title: string;
    id: number;
}

interface CarouselContainerProps {
    carouselData: CarouselItemData[];
}

const CarouselContainer: FC<CarouselContainerProps> = ({ carouselData }) => {
    return (
        <div className="carousel relative container mx-auto">
            <div className="carousel-inner relative overflow-hidden w-full">
                {carouselData.map((carouselData, index, array) => {
                    let prev = carouselData.id - 1;
                    let next = carouselData.id + 1;
                    let checked = true;

                    if (carouselData.id === array.length) {
                        next = 1;
                    } else if (carouselData.id === 1) {
                        prev = array.length;
                    } else if (index === 0) {
                        checked = true;
                    }

                    return (
                        <CarouselItem
                            prev={prev}
                            next={next}
                            checked={checked}
                            {...carouselData}
                            key={carouselData.id}
                        />
                    );
                })}
                <CarouselNavContainer carouselData={carouselData} />
            </div>
            <div></div>
        </div>
    );
};

export default CarouselContainer;
