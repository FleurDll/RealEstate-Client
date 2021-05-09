import React from 'react';
import _ from "lodash";
import { BiensBottomContainer, Description, Title, Garage, BottomLeft, BottomRight, DescriptionItem, GarageIcon, BedroomIcon, BathIcon } from "./BiensBottomElements";

const BiensBottom = ({ title, garage, type, bedroom, bathroom, prix }) => {
    return (
        <BiensBottomContainer>
            <Description>
                <Title>{title}</Title>
                <Garage><GarageIcon />{_.upperFirst(garage)}</Garage>
            </Description>
            <Description>
                <BottomLeft>
                    <DescriptionItem>{_.upperFirst(type)}  |</DescriptionItem>
                    <DescriptionItem><BedroomIcon />{bedroom}</DescriptionItem>
                    <DescriptionItem><BathIcon />{bathroom}</DescriptionItem>
                </BottomLeft>
                <BottomRight>
                    <DescriptionItem>{prix}€</DescriptionItem>
                </BottomRight>
            </Description>
        </BiensBottomContainer>
    )
}

export default BiensBottom;
