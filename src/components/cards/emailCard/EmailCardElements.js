import styled from "styled-components";
import { FaEnvelope } from "react-icons/fa";

export const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    max-width: 350px;
    border-radius: 50px;
    background: #0076b3;
    padding: 12px 25px;
    
    box-shadow: rgb(0 0 0 / 30%) 0px 0.0625rem 0.1875rem 0px;

    &:hover{
        background: #FF6584
    }

    @media screen and (max-width: 480px) {
        padding: 8px 10px;
        font-size: 15px;
    }
`;

export const CardText = styled.p`
    text-align: center;
    letter-spacing: 1px;
`;

export const EmailIcon = styled(FaEnvelope)`
    margin-right: 10px;
`;