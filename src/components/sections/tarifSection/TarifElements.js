import styled from "styled-components";
import { SECTION, COLORS, SIZE } from "../../../constantsStyles";

export const TarifContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${SECTION.padding};

    @media screen and (max-width: 768px) {
        padding: ${SECTION.padding768};
    }
`;

export const TarifHeadingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
`;

export const TarifHeading = styled.p`
    font-size: ${SIZE.heading};
    font-weight: 600;
    color: ${COLORS.darkBlue};
    margin-bottom: 10px;

    @media screen and (max-width: 480px) {
        font-size: ${SIZE.heading480};
    }
`;

export const TarifSubtitle = styled.div`
    display: flex;
    color: ${COLORS.mainBlue};
    font-size: 27px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;

    @media screen and (max-width: 480px) {
        font-size: 20px;
    }
`;

export const LogoHappyImmo = styled.img`
    width: 39px;
    height: 39px;
    margin-left: 5px;

    @media screen and (max-width: 480px) {
        width: 25px;
        height: 25px;
    }
`;

export const TarifImgWrapper = styled.div`
    border: solid;
    border-color: ${COLORS.mainBlue};
    border-radius: ${SIZE.borderRadius};
`;

export const TarifImage = styled.img`
    max-width: 720px;

    @media screen and (max-width: 768px) {
        max-width: 450px;
    }

    @media screen and (max-width: 480px) {
        max-width: 290px;
    }
`;

