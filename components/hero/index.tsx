import { FC } from "react";
import { CarouselItemData } from "components/carousel";
import CarouselContainer from "components/carousel";
import CarouselImg1 from 'public/carousel-1.jpg'
import CarouselImg2 from 'public/carousel-2.jpg'
import CarouselImg3 from 'public/carousel-3.jpg'

const carouselData: CarouselItemData[] = [
    { image: CarouselImg1, title: "Stripy Zig Zag Jigsaw Pillow and Duvet Set", id: 1 },
    { image: CarouselImg2, title: "Real Bamboo Wall Clock", id: 2 },
    { image: CarouselImg3, title: "Brown and blue hardbound book", id: 3 },
];

const Hero: FC = () => {
    return <CarouselContainer carouselData={carouselData} />;
};

export default Hero;
