import styled from "styled-components";

export const BiensContainer = styled.div`
    
`;

export const BiensWrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr 0.6fr;
    grid-template-columns: 2fr 1fr;
    z-index: 1;
    width: 100%;
    height: auto;
    max-width: 1100px;
    margin: 110px auto;
    padding: 30px 5px;
    justify-content: center;
    box-shadow: rgb(0 0 0 / 30%) 0px 0.0625rem 0.1875rem 0px;

    @media screen and (max-width: 768px) {
        grid-template-rows: 1fr 0.1fr 0.1fr 0.1fr 0.1fr;
        grid-template-columns: 1fr;
    }
`;

export const Column = styled.div``;

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
    font-size: 18px;
`;

export const TextDescription = styled.div`
    color: grey;
    margin: 40px 15px;
    letter-spacing: 0.5px;
    line-height: 26px;
`;

export const DPEImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const DPEImg = styled.img`
    @media screen and (max-width: 480px) {
        max-width: 200px;
    }
`;