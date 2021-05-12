import styled, { css } from "styled-components";
import { COLORS } from "../../../constantsStyles";
import { IoPricetagOutline } from "react-icons/io5";
import { GoLocation } from "react-icons/go";
import { BiBed, BiBath, BiBuildingHouse } from "react-icons/bi";
// eslint-disable-next-line no-unused-vars
import { GiHomeGarage } from "react-icons/gi";
import { AiOutlineCar } from "react-icons/ai";

export const DetailsContainer = styled.div`
`;

export const Title = styled.div`
    text-align: center;
    font-weight: bold;
    ${'' /* color: #708090; */}
    color: ${COLORS.middleGrey};
    margin: 20px auto 30px;
    font-size: 20px;
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

export const Text = styled.p`
    font-size: 15px;
`;

export const Separation = styled.div`
    height: 200px;
    width: 2px;
    background-color: ${COLORS.mainPink};
    margin: auto;

    @media screen and (max-width: 768px) {
        height: 120px;
    }
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

export const GarageIcon = styled(AiOutlineCar)`
    ${styledIcon};
`;

export const BedroomIcon = styled(BiBed)`
    ${styledIcon};
`;

export const BathIcon = styled(BiBath)`
    ${styledIcon};
`;
