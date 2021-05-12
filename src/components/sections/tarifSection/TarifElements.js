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
    align-items: center;
    margin-bottom: 30px;
`;

export const TarifHeading = styled.p`
    font-size: ${SIZE.heading};
    font-weight: 600;
    color: ${COLORS.darkBlue};

    @media screen and (max-width: 480px) {
        font-size: ${SIZE.heading480};
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

export const LogoHappyImmo = styled.img`
    width: 50px;
    height: 50px;
    margin-left: 5px;
`;