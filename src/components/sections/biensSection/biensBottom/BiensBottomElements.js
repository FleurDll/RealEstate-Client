import styled, { css } from "styled-components";
import { COLORS } from "../../../../constantsStyles";
import { BiBed, BiBath } from "react-icons/bi";
// eslint-disable-next-line no-unused-vars
import { GiHomeGarage } from "react-icons/gi";
import { AiOutlineCar } from "react-icons/ai";

export const BiensBottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 5px;
`;

export const Description = styled.div`
    display: flex;
    justify-content: space-between;
    color: ${COLORS.lightGrey};
    margin: 5px;  
`;

export const Title = styled.h1`
    color: ${COLORS.middleGrey};
    font-weight: bold;
    font-size: 18px;

    @media screen and (max-width: 480px) {
        font-size: 16px;
    }
`;

export const BottomLeft = styled.div`
    display: flex;
`;

export const BottomRight = styled.div`  
`;

export const styledDescriptionItem = css`
    display: flex;
    align-items: center;
    margin-right: 10px;
`;

export const DescriptionItem = styled.div`
    ${styledDescriptionItem};
`;

export const DescriptionItemType = styled.div`
    ${styledDescriptionItem};
    border-right: 1px solid #d5d3da;
    padding-right: 10px;
`;

export const styledIcon = css`
    color: #787878;
    margin-right: 5px;
`;

export const GarageIcon = styled(AiOutlineCar)`
    ${styledIcon}
`;

export const BedroomIcon = styled(BiBed)`
    ${styledIcon}
`;

export const BathIcon = styled(BiBath)`
    ${styledIcon}
`;