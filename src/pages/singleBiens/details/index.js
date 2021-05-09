import React from 'react';
import _ from "lodash";
import { DetailsContainer, Title, Description, Column, DetailsItem, Text, Separation, LocationIcon, PriceIcon, TypeIcon, GarageIcon, BedroomIcon, BathIcon } from "./DetailsElements";

const Details = ({ singleHouse }) => {
    return (
        <DetailsContainer>
            <Title>{singleHouse.title}</Title>
            <Description>
                <Column>
                    <DetailsItem>
                        <LocationIcon />
                        <Text>{singleHouse.localisation}</Text>
                    </DetailsItem>
                    <DetailsItem>
                        <TypeIcon />
                        <Text>{_.upperFirst(singleHouse.type)}</Text>
                    </DetailsItem>
                    <DetailsItem>
                        <PriceIcon />
                        <Text>{singleHouse.prix}€</Text>
                    </DetailsItem>
                </Column>
                <Separation></Separation>
                <Column>
                    <DetailsItem>
                        <GarageIcon />
                        <Text>{_.upperFirst(singleHouse.garage)}</Text>
                    </DetailsItem>
                    <DetailsItem>
                        <BedroomIcon />
                        <Text>{singleHouse.chambres}</Text>
                    </DetailsItem>
                    <DetailsItem>
                        <BathIcon />
                        <Text>{singleHouse.bathroom}</Text>
                    </DetailsItem>
                </Column>
            </Description>
        </DetailsContainer>
    );
};

export default Details;
