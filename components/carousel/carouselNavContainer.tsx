import { FC } from "react";
import CarouselNavItem from "./carouselNavItem";
import { CarouselItemData } from ".";

interface CarouselNavContainerProps{
    carouselData: CarouselItemData[];
}

const CarouselNavContainer: FC<CarouselNavContainerProps> = ({carouselData}) => {
    return (
        <ol className="carousel-indicators">
            {carouselData.map(({id}) => {
                return <CarouselNavItem id={id} key={id}/>
            })}
        </ol>
    );
};

export default CarouselNavContainer;
