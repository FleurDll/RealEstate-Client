import styled from "styled-components";
import { SECTION, COLORS } from "../../../constantsStyles";


export const AvisContainer = styled.div`
background: ${COLORS.backgroundGrey};`;

export const AvisWrapper = styled.div`
    z-index: ${SECTION.zIndex};
    height: ${SECTION.height};
    width: ${SECTION.width};
    max-width: ${SECTION.maxWidth};
    margin: ${SECTION.margin};
    padding: 15px 0 0;
    justify-content: center;

    @media screen and (max-width: 768px) {
        padding: ${SECTION.padding768};
    }
`;