import styled from "styled-components";
import { COLORS, SIZE } from "../../../../constantsStyles";
import { RiArrowDropRightFill } from "react-icons/ri";

export const CritereWrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 0.1fr 1fr;
`;

export const ArrowPink = styled(RiArrowDropRightFill)`
    color: ${COLORS.mainPink};
    font-size: 30px;
`;

export const Critere = styled.p`
    max-width: 440px;
    margin-bottom: 15px;
    font-size: ${SIZE.subtitle};
    color: ${COLORS.darkGrey};

    @media screen and (max-width: 480px) {
        font-size: ${SIZE.subtitle480};
    }
`;
