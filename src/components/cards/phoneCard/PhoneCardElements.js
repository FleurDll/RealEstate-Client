import styled from "styled-components";
import { COLORS, CARD } from "../../../constantsStyles";
import { FaMobile } from "react-icons/fa";

export const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    max-width: 220px;
    color: #fff;
    border-radius: ${CARD.borderRadius};
    background: ${COLORS.mainBlue};
    padding: ${CARD.padding};
    box-shadow: ${CARD.boxShadow};

    @media screen and (max-width: 480px) {
        padding: ${CARD.padding480};
        font-size: 15px;
    }
`;

export const CardText = styled.p`
    text-align: center;
    letter-spacing: 1px;
`;

export const MobileIcon = styled(FaMobile)`
    margin-right: 10px;
`;