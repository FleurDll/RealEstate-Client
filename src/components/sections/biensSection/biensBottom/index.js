import React from 'react';
import _ from "lodash";
// eslint-disable-next-line no-unused-vars
import { BiensBottomContainer, Description, Title, BottomLeft, BottomRight, DescriptionItem, DescriptionItemType, GarageIcon, BedroomIcon, BathIcon } from "./BiensBottomElements";

const BiensBottom = ({ title, garage, type, bedroom, bathroom, prix }) => {
    return (
        <BiensBottomContainer>
            <Description>
                <Title>{title}</Title>
            </Description>
            <Description>
                <BottomLeft>
                    <DescriptionItemType>{type && `${_.upperFirst(type)}`}</DescriptionItemType>
                    <DescriptionItem><GarageIcon />{garage}</DescriptionItem>
                    <DescriptionItem>{bedroom && <><BedroomIcon />{bedroom}</>}</DescriptionItem>
                    <DescriptionItem>{bathroom && <><BathIcon />{bathroom}</>}</DescriptionItem>
                </BottomLeft>
                <BottomRight>
                    <DescriptionItem>{prix && `${prix}€`}</DescriptionItem>
                </BottomRight>
            </Description>
        </BiensBottomContainer>
    )
}

export default BiensBottom;