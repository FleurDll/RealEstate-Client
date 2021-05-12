import styled from "styled-components";
import { COLORS, CARD } from "../../../constantsStyles";
import { FaEnvelope } from "react-icons/fa";

export const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    max-width: 350px;
    border-radius: ${CARD.borderRadius};
    background: ${COLORS.mainBlue};
    padding: ${CARD.padding};
    box-shadow: ${CARD.boxShadow};

    &:hover{
        background: ${COLORS.mainPink};
    }

    @media screen and (max-width: 480px) {
        padding: ${CARD.padding480};
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