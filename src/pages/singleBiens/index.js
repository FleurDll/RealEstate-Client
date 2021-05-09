import React, { useState, useEffect } from 'react';
import sanityClient from "../../client";
import BlockContent from "@sanity/block-content-to-react";
import Carousel from "./carousel";
import Details from "./details";
import PhoneCard from "../../components/cards/phoneCard";

import { BiensContainer, BiensWrapper, Row, ContactCard, ContactCardTitle, TextDescription, DPEImageWrapper, DPEImg, Column } from "./singleBiensElements";

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

    return (
        <>
            <BiensContainer>
                <BiensWrapper>
                    <Column>
                        <Carousel imagesGallery={singleHouse.imagesGallery} />
                    </Column>
                    <Column>
                        <Details singleHouse={singleHouse} />
                        {singleHouse.statut === "aVendre" &&
                            <ContactCard>
                                <ContactCardTitle>Des Question ? Une Visite ?</ContactCardTitle>
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
                                <DPEImg src={`../../../images/dpe/dpe-${singleHouse.dpe}.png`} alt="dpe" />
                            }
                        </DPEImageWrapper>
                    </Column>
                </BiensWrapper>
            </BiensContainer>
        </>
    );
};

export default SingleBiens;
