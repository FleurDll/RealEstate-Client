import styled, { css } from "styled-components";

export const EstimationContainer = styled.div`
    background: #F0F2F5;
`;

export const EstimationWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    z-index: 1;
    height: auto;
    width: 100%;
    max-width: 1100px;
    margin: 0px auto;
    padding: 60px 24px;
    justify-content: center;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 40px 10px;
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
    border-radius: 0.1875rem;

    @media screen and (max-width: 768px) {
        width: 60%;
        margin-bottom: 20px;
    }
`;

export const EstimationTitle = styled.h1`
    color: #0076b3;
    font-size: 38px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 28px;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const EstimationText = styled.div`
    color: #383838;
`;

export const EstimationDescription = styled.p`
    margin-bottom: 15px;
    font-size: 18px;
    line-height: 24px;
`;

export const EstimationContactWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
`;