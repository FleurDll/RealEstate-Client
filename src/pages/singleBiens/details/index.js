import React from 'react';
import _ from "lodash";
import { DetailsContainer, Title, Description, Column, DetailsItem, Text, Separation, LocationIcon, PriceIcon, TypeIcon, GarageIcon, BedroomIcon, BathIcon } from "./DetailsElements";

const Details = ({ singleHouse }) => {
    const formatPrix = (prix) => {
        return Number(_.camelCase(prix)).toLocaleString() + "€"
    }

    const formatGarage = (garage) => {
        return garage == null ? 0 : garage
    }

    const formatType = (type) => {
        return _.upperFirst(type);
    }
    return (
        <DetailsContainer>
            <Title>{singleHouse.title}</Title>
            <Description>
                <Column>
                    <DetailsItem>
                        {singleHouse.localisation &&
                            <>
                                <LocationIcon />
                                <Text>{singleHouse.localisation}</Text>
                            </>
                        }
                    </DetailsItem>
                    <DetailsItem>
                        {singleHouse.type && <>
                            <TypeIcon />
                            <Text>{formatType(singleHouse.type)}</Text>
                        </>}
                    </DetailsItem>
                    <DetailsItem>
                        {singleHouse.prix &&
                            <>
                                <PriceIcon />
                                <Text>{formatPrix(singleHouse.prix)}</Text>
                            </>
                        }
                    </DetailsItem>
                </Column>
                <Separation></Separation>
                <Column>
                    <DetailsItem>
                        <GarageIcon />
                        <Text>{formatGarage(singleHouse.garage)}</Text>
                    </DetailsItem>
                    <DetailsItem>
                        {singleHouse.chambres && <>
                            <BedroomIcon />
                            <Text>{singleHouse.chambres}</Text>
                        </>}
                    </DetailsItem>
                    <DetailsItem>
                        {singleHouse.bathroom && <>
                            <BathIcon />
                            <Text>{singleHouse.bathroom}</Text>
                        </>}
                    </DetailsItem>
                </Column>
            </Description>
        </DetailsContainer>
    );
};

export default Details;
