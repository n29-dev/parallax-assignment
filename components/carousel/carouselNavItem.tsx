import { FC } from "react";

interface CaroselNavItemProps {
    id: number;
}

const CarouselNavItem: FC<CaroselNavItemProps> = ({ id }) => {
    return (
        <li className="inline-block mr-3">
            <label
                htmlFor={`carousel-${id}`}
                className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-white"
            >
                •
            </label>
        </li>
    );
};

export default CarouselNavItem;