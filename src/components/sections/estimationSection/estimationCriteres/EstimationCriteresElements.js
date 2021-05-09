import styled from "styled-components";
import { RiArrowDropRightFill } from "react-icons/ri";

export const CritereWrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 0.1fr 1fr;
`;

export const ArrowPink = styled(RiArrowDropRightFill)`
    color: #FF6584;
    font-size: 30px;
`;

export const Critere = styled.p`
    max-width: 440px;
    margin-bottom: 15px;
    font-size: 16px;
    line-height: 24px;
    color: #010606;
`;
