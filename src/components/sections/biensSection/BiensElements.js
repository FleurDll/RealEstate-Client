import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const HousesContainer = styled.div`
    color: #000;
    background: #fff;
`;

export const HousesWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    padding: 60px 24px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 40px 10px;
        max-width: 480px;
    }

    @media screen and (max-width: 480px) {
        max-width: 400px;
        padding: 40px 0px;
    }
`;

export const HouseLink = styled(LinkR)`
    margin: 15px;
    text-decoration: none;
    box-shadow: rgb(0 0 0 / 30%) 0px 0.0625rem 0.1875rem 0px;
    border-radius: 0.1875rem;

    &:hover {
        background: rgba(0,0,0,0.1);
        box-shadow: rgb(0 0 0 / 50%) 0px 0.0625rem 0.1875rem 0px;
    }
`;

export const HouseAnnonce = styled.div`
    display: grid;
    grid-template-rows: 1fr 0.15fr;
    letter-spacing: 0.5px;
`;


