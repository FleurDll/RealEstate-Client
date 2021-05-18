import React, { useState, useEffect } from 'react';
import sanityClient from "../../client";
import BlockContent from "@sanity/block-content-to-react";
import Carousel from "./carousel";
import Details from "./details";
import PhoneCard from "../../components/cards/phoneCard";

import { BiensContainer, BiensWrapper, ContactCard, ContactCardTitle, TextDescription, DPEImageWrapper, DPEImg, Column, ColumnCarousel } from "./singleBiensElements";
import Navbar from '../../components/navigation/navbar';

const SingleBiens = ({ match }) => {
    const [singleHouse, setSingleHouse] = useState(null);

    let slug = match.params.slug;

    useEffect(() => {
        sanityClient
            .fetch(`*[slug.current == "${slug}"]{
            title, 
            _id,
            slug,
            statut,
            localisation,
            type,
            bathroom,
            chambres,
            prix,
            garage,
            dpe,
            ges,
            body,
            mainImage{
                asset->{
                    _id, 
                    url
                }
            },
            imagesGallery
        }`).then((data) => setSingleHouse(data[0]))
            .catch(console.error);
    }, [slug]);

    if (!singleHouse) return <div></div>;

    let allImages = [];

    allImages = singleHouse.imagesGallery.concat(singleHouse.mainImage);

    return (
        <>
            <Navbar />
            <BiensContainer>
                <BiensWrapper>
                    <ColumnCarousel>
                        <Carousel imagesGallery={allImages} />
                    </ColumnCarousel>
                    <Column>
                        <Details singleHouse={singleHouse} />
                        {singleHouse.statut === "1" &&
                            <ContactCard>
                                <ContactCardTitle>Des Questions ? Une Visite ?</ContactCardTitle>
                                <PhoneCard />
                            </ContactCard>
                        }
                    </Column>
                    <Column>
                        <TextDescription>
                            <BlockContent blocks={singleHouse.body} projectId="m02nlpav" dataset="production" />
                        </TextDescription>
                    </Column>
                    <Column>
                        <DPEImageWrapper>
                            {singleHouse.dpe &&
                                <DPEImg src={`/images/dpe/dpe-${singleHouse.dpe}.png`} alt="dpe" />
                            }
                        </DPEImageWrapper>
                        <DPEImageWrapper>
                            {singleHouse.ges &&
                                <DPEImg src={`/images/gas/GAS${singleHouse.ges}.png`} alt="ges" />
                            }
                        </DPEImageWrapper>
                    </Column>
                </BiensWrapper>
            </BiensContainer>
        </>
    );
};

export default SingleBiens;
