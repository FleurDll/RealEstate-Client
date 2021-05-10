import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const AProposContainer = styled.div`
    color: #000;
    background: #fff;
`;

export const AProposWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    z-index: 1;
    height: auto;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 60px 24px;
    justify-content: center;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 40px 10px;
    }
`;

export const Column = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
`;

export const TopLine = styled.div`
     color: #0076b3;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px; 
`;

export const Heading = styled.div`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: "#f7f8fa";

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.div`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: #383838;

    @media screen and (max-width: 480px) {
        font-size: 16px;
    }
`;

export const ContactWrapper = styled.div``;

export const EmailCardWrapper = styled(LinkS)`
    cursor: pointer;
`;

export const ProfileImageWrapper = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;

    
`;

export const ProfileImage = styled.img`
    width: 80%;
    margin: 0 0 10px 0;
    padding-right: 0;
    border-radius: 0.1875rem;

    @media screen and (max-width: 768px) {
        width: 60%;
        margin: 20px 0 0 0;
    }
`;