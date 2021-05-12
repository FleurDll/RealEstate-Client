import styled, { keyframes } from "styled-components";
import { SECTION, COLORS, SIZE } from "../../../constantsStyles";
import { VscLoading } from "react-icons/vsc";

export const ContactContainer = styled.div`
    background: ${COLORS.backgroundGrey};
`;

export const ContactWrap = styled.div`
    display: flex;
    z-index: ${SECTION.zIndex};
    height: ${SECTION.height};
    width: ${SECTION.width};
    max-width: ${SECTION.maxWidth};
    margin: ${SECTION.margin};
    padding: ${SECTION.padding};
    justify-content: center;

    @media screen and (max-width: 768px) {
        padding: ${SECTION.padding768}
    }
`;

export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContactH1 = styled.h1`
    margin: 10px;
    font-size: ${SIZE.heading};
    color: ${COLORS.darkBlue};

    @media screen and (max-width: 480px) {
        font-size: ${SIZE.heading480};
    }
`;

const spin = keyframes`
        to {transform: rotate(360deg);}
`;

export const LoadingIcon = styled(VscLoading)`
    margin-top: 20px;
    font-size: 50px;
    color: ${COLORS.mainPink};
    animation: ${spin} 2s linear infinite;
`;

export const SendButtonWrap = styled.div``;