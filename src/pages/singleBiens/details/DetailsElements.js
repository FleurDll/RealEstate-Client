import styled, { css } from "styled-components";
import { IoPricetagOutline } from "react-icons/io5";
import { GoLocation } from "react-icons/go";
import { BiBed, BiBath, BiBuildingHouse } from "react-icons/bi";
import { GiHomeGarage } from "react-icons/gi";

export const DetailsContainer = styled.div``;

export const Title = styled.div`
    text-align: center;
    font-weight: bold;
    color: #708090;
    margin: 20px auto 30px;
`;

export const Description = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 1fr 0.2fr 1fr;
`;

export const Column = styled.div`
    height: 100%;
    display: grid;
    align-items: center;
`;

export const DetailsItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Text = styled.div``;

export const Separation = styled.div`
    height: 200px;
    width: 2px;
    background-color: #FF6584;
    margin: auto;
`;

const styledIcon = css`
    color: #708090;
    margin-right: 10px;
    font-size: 18px;
`;

export const LocationIcon = styled(GoLocation)`
    ${styledIcon};
`;

export const TypeIcon = styled(BiBuildingHouse)`
    ${styledIcon};
`;

export const PriceIcon = styled(IoPricetagOutline)`
    ${styledIcon};
`;

export const GarageIcon = styled(GiHomeGarage)`
    ${styledIcon};
`;

export const BedroomIcon = styled(BiBed)`
    ${styledIcon};
`;

export const BathIcon = styled(BiBath)`
 ${styledIcon};
`;
