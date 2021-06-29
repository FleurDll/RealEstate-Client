import React, { useState } from 'react';
import sanityClient from "../../../client";
import imageUrlBuilder from "@sanity/image-url";
import { CarouselWrapper, ImagesSlide, ImagesSlider, Images, SliderButtons, PrevArrow, NextArrow } from "./CarouselElements";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source);
}

const Carousel = ({ imagesGallery }) => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!imagesGallery) return <div></div>;

    const length = imagesGallery.length;

    return (
        <CarouselWrapper>
            {imagesGallery.map((image, index) => {
                return (
                    <ImagesSlide key={index}>
                        {index === current && (
                            <ImagesSlider>
                                <Images src={`${urlFor(image)}?q=80`} alt={image} />
                            </ImagesSlider>
                        )}
                    </ImagesSlide>
                );
            })}
            <SliderButtons>
                <PrevArrow onClick={prevSlide} />
                <NextArrow onClick={nextSlide} />
            </SliderButtons>
        </CarouselWrapper>
    );
};

export default Carousel;
