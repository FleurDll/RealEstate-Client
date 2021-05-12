import styled, { css } from "styled-components";
import { SECTION, COLORS, SIZE } from "../../../constantsStyles";
import { Link as LinkS } from "react-scroll";

export const EstimationContainer = styled.div`
    background: ${COLORS.backgroundGrey};
`;

export const EstimationWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
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

export const StyledColumn = css`
    display: flex;
    flex-direction: column;
    padding: 0 15px;
`;

export const ColumnLeft = styled.div`
   ${StyledColumn}
   align-items: center;
`;

export const ColumnRight = styled.div`
    ${StyledColumn}
`;

export const EstimationImage = styled.img`
    width: 100%;
    border-radius: ${SIZE.borderRadius};
    padding: 0 20px;

    @media screen and (max-width: 768px) {
        width: 90%;
        margin-bottom: 20px;
    }
`;

export const EstimationTitle = styled.h1`
    color: ${COLORS.darkBlue};
    font-size: ${SIZE.heading};
    font-weight: 700;
    letter-spacing: 1.4px;
    margin-bottom: 28px;

    @media screen and (max-width: 480px) {
        font-size: ${SIZE.heading480};
    }
`;

export const EstimationText = styled.div`
    color: ${COLORS.darkGrey};
`;

export const EstimationDescription = styled.p`
    margin-bottom: 15px;
    font-size: ${SIZE.subtitle};
    line-height: 24px;

    @media screen and (max-width: 480px) {
        font-size: ${SIZE.subtitle480};
    }
`;

export const EstimationProposition = styled.p`
    margin-top: 30px;
    font-size: ${SIZE.subtitle};
    line-height: 24px;
    color: ${COLORS.darkGrey};

    @media screen and (max-width: 480px) {
        font-size: ${SIZE.subtitle480};
    }
`;

export const EstimationContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
`;

export const EmailCardWrapper = styled(LinkS)`
    cursor: pointer;
`;