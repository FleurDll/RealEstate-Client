import styled from "styled-components";
import { RiMailSendLine } from "react-icons/ri";

export const Card = styled.button`
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    margin: 10px 0;
    max-width: 220px;
    color: #fff;
    border-radius: 50px;
    background: #0076b3;
    padding: 18px 25px;
    box-shadow: rgb(0 0 0 / 30%) 0px 0.0625rem 0.1875rem 0px;
    cursor: pointer;

    &:hover{
        ${'' /* background: #FF6584; */}
        transform: scale(1.04, 1.04);
    }
`;

export const CardText = styled.p`
    text-align: center;
    letter-spacing: 1px;
`;

export const SendIcon = styled(RiMailSendLine)`
    font-size: 23px;
    margin-left: 10px;
`;