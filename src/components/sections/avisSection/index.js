import React, { useState, useEffect } from 'react';
import sanityClient from "../../../client";

import Carousel from '../../../pages/singleBiens/carousel';
import { AvisContainer, AvisWrapper } from "./AvisElements";

const AvisSection = () => {
    const [images, setImages] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "avis"]{
            image{
                asset->{
                    _id,
                    url
                }
            }
        }`)
            .then((data) => setImages(data))
            .catch(console.error);
    }, []);


    if (images == null) {
        return <div></div>
    }

    const imagesOnly = [];

    images.forEach(image => {
        imagesOnly.push(image.image)
    });

    return (
        <AvisContainer id="avis">
            <AvisWrapper><Carousel imagesGallery={imagesOnly} /></AvisWrapper>
        </AvisContainer>
    )
}

export default AvisSection