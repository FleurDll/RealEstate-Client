import styled from "styled-components";

export const BiensTopContainer = styled.div``;

export const HouseLocalisation = styled.h1`
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

export const HouseBanner = styled.img`
    width: 200px;
    position: absolute;
    margin-top: 303px;

    @media screen and (max-width: 900px) {
        margin-top: 241px;
        width: 175px;
    }

    @media screen and (max-width: 768px) {
        margin-top: 199px;
        width: 150px;
    }

    @media screen and (max-width: 480px) {
        margin-top: 169px;
    }
`;

export const HouseImage = styled.img`
    height: 370px;
    border-top-right-radius: 0.1875rem;
    border-top-left-radius: 0.1875rem;
    width: 100%;

    @media screen and (max-width: 900px) {
        height: 300px;
    }

    @media screen and (max-width: 768px) {
        height: 250px;
    }

    @media screen and (max-width: 480px) {
        height: 220px;
    }
`;