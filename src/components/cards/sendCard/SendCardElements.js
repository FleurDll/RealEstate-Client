import styled from "styled-components";
import { COLORS, CARD } from "../../../constantsStyles";
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
    border-radius: ${CARD.borderRadius};
    background: ${COLORS.mainBlue};
    padding: 18px 25px;
    box-shadow: ${CARD.boxShadow};
    cursor: pointer;

    &:hover{
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