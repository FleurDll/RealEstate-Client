import styled, { css } from "styled-components";
import { BiBed, BiBath } from "react-icons/bi";
import { GiHomeGarage } from "react-icons/gi";

export const BiensBottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 5px;
`;

export const Description = styled.div`
    display: flex;
    justify-content: space-between;
    color: #696969;
    margin: 5px;  
`;

export const Title = styled.h1`
    color: #505050;
    font-weight: bold;
    font-size: 18px;

    @media screen and (max-width: 480px) {
        font-size: 16px;
    }
`;
export const Garage = styled.p`
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
    border-right: 1px solid #ff6584;
    ${'' /* border-right: 1px solid #0076b3;
    border-right: 1px solid #d5d3da; */}
    padding-right: 10px;
`;

export const styledIcon = css`
    color: #787878;
    margin-right: 5px;
    vertical-align: top;
`;

export const GarageIcon = styled(GiHomeGarage)`
    ${styledIcon}
`;

export const BedroomIcon = styled(BiBed)`
    ${styledIcon}
`;

export const BathIcon = styled(BiBath)`
    ${styledIcon}
`;