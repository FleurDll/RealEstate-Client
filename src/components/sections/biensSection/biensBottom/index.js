import React from 'react';
import _ from "lodash";
import { BiensBottomContainer, Description, Title, BottomLeft, BottomRight, DescriptionItem, DescriptionItemType, GarageIcon, BedroomIcon, BathIcon } from "./BiensBottomElements";

const BiensBottom = ({ title, garage, type, bedroom, bathroom, prix }) => {
    return (
        <BiensBottomContainer>
            <Description>
                <Title>{title}</Title>
                <DescriptionItem><GarageIcon />{_.upperFirst(garage)}</DescriptionItem>
                {/* {garage === "oui" && <DescriptionItem>Garage</DescriptionItem>} */}
            </Description>
            <Description>
                <BottomLeft>
                    <DescriptionItemType>{_.upperFirst(type)}</DescriptionItemType>
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
