import styled from "styled-components";
import { SECTION, COLORS, SIZE } from "../../../constantsStyles";
import { Link as LinkS } from "react-scroll";

export const AProposContainer = styled.div`
    color: #000;
    background: ${COLORS.backgroundWhite};
`;

export const AProposWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    z-index: ${SECTION.zIndex};
    height: ${SECTION.height};
    width: ${SECTION.width};
    max-width: ${SECTION.maxWidth};
    margin: ${SECTION.margin};
    padding: ${SECTION.padding};
    justify-content: center;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: ${SECTION.padding768};
    }
`;

export const Column = styled.div`
    margin-bottom: 15px;
    padding: 0 5px;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
`;

export const TopLine = styled.div`
    display: flex;
    align-items: center;
`;

export const TopLineText = styled.div`
    color: ${COLORS.mainBlue};
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
`;

export const LogoHappyImmo = styled.img`
    width: 40px;
    height: 40px;
    margin-left: 5px;
`;

export const Heading = styled.div`
    margin: 12px 0 24px 0;
    font-size: ${SIZE.heading};
    color: ${COLORS.darkBlue};
    line-height: 1.1;
    font-weight: 600;

    @media screen and (max-width: 480px) {
        font-size: ${SIZE.heading480};
    }
`;

export const Subtitle = styled.div`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: ${SIZE.subtitle};
    letter-spacing: 0.5px;
    line-height: 26px;
    color: ${COLORS.darkGrey};

    @media screen and (max-width: 480px) {
        font-size: ${SIZE.subtitle480};
    }
`;

export const ContactWrapper = styled.div`
    @media screen and (max-width: 768px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
`;

export const EmailCardWrapper = styled(LinkS)`
    cursor: pointer;
`;

export const ProfileImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ProfileImage = styled.img`
    width: 80%;
    margin: 0 0 10px 0;
    padding-right: 0;
    border-radius: ${SIZE.borderRadius};

    @media screen and (max-width: 768px) {
        width: 60%;
        margin: 20px 0 0 0;
    }
`;
