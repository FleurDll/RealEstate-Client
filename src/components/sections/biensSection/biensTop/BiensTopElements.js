import styled from "styled-components";

export const BiensTopContainer = styled.div`
    position: relative;
`;

export const LocalisationBanner = styled.h1`
    position: absolute;
    background: #006294;
    color: #fff;
    font-weight: 400;
    padding: 10px;
    font-size: 20px;
    border-top-left-radius: 0.1875rem;

    @media screen and (max-width: 480px) {
        font-size: 16px;
    }
`;

export const StatusBanner = styled.img`
    position: absolute;
    bottom: 0;
    max-width: 200px;
    max-height: 65px;

    @media screen and (max-width: 480px) {
        max-width: 170px;
        max-height: 50px;
    }
`;

export const HouseImage = styled.img`
    border-top-right-radius: 0.1875rem;
    border-top-left-radius: 0.1875rem;
    width: 100%;
    height: 100%;
`;