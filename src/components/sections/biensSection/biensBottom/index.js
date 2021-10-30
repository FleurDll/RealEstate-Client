import React from 'react';
import _ from "lodash";
import { BiensBottomContainer, Description, Title, BottomLeft, BottomRight, DescriptionItem, DescriptionItemType, GarageIcon, BedroomIcon, BathIcon } from "./BiensBottomElements";

const BiensBottom = ({ title, garage, type, bedroom, bathroom, prix }) => {
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
        <BiensBottomContainer>
            <Description>
                <Title>{title}</Title>
            </Description>
            <Description>
                <BottomLeft>
                    <DescriptionItemType>{type && formatType(type)}</DescriptionItemType>
                    <DescriptionItem><GarageIcon />{formatGarage(garage)}</DescriptionItem>
                    <DescriptionItem>{bedroom && <><BedroomIcon />{bedroom}</>}</DescriptionItem>
                    <DescriptionItem>{bathroom && <><BathIcon />{bathroom}</>}</DescriptionItem>
                </BottomLeft>
                <BottomRight>
                    <DescriptionItem>{prix && formatPrix(prix)}</DescriptionItem>
                </BottomRight>
            </Description>
        </BiensBottomContainer>
    )
}

export default BiensBottom;