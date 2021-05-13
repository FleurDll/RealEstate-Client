import styled from "styled-components";
import { SECTION, COLORS, SIZE, CARD } from "../../constantsStyles";

export const BiensContainer = styled.div`
`;

export const BiensWrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr 0.6fr;
    grid-template-columns: 2fr 1fr;
    z-index: ${SECTION.zIndex};
    width: ${SECTION.width};
    height: ${SECTION.height};
    max-width: ${SECTION.maxWidth};
    margin: 90px auto;
    padding: 30px 5px;
    justify-content: center;
    box-shadow: ${CARD.boxShadow};

    @media screen and (max-width: 768px) {
        grid-template-rows: 1fr 0.1fr 0.1fr 0.1fr 0.1fr;
        grid-template-columns: 1fr;
    }
`;

export const Column = styled.div`
    @media screen and (max-height: 680px) {
        height: 480px;
    }
`;

export const Details = styled.div``;

export const ContactCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 90px 0;

    @media screen and (max-width: 768px) {
        margin: 40px 0 0;
    }
`;

export const ContactCardTitle = styled.div`
    margin: 10px;
    color: ${COLORS.darkBlue};
    font-size: ${SIZE.subtitle};
`;

export const TextDescription = styled.div`
    color: ${COLORS.darkGrey};
    margin: 40px 15px;
    letter-spacing: 0.5px;
    line-height: 26px;
`;

export const DPEImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-height: 680px) {
        margin-top: 30px;
    }
`;

export const DPEImg = styled.img`
    @media screen and (max-width: 480px) {
        max-width: 200px;
    }

`;