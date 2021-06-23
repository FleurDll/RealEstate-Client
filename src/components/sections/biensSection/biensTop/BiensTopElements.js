import styled from "styled-components";

export const BiensTopContainer = styled.div`
`;

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
    max-width: 200px;
    max-height: 65px;
    position: absolute;
    margin-top: ${({ containerHeight }) => `${containerHeight !== null && containerHeight - 65}px`};
`;

export const HouseImage = styled.img`
    border-top-right-radius: 0.1875rem;
    border-top-left-radius: 0.1875rem;
    width: 100%;
`;

export const ImageWrapper = styled.div`
    height: auto;
    width: auto;
`;