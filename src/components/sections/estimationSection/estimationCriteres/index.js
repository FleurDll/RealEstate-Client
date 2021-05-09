import React from 'react';
import { CritereWrapper, ArrowPink, Critere } from "./EstimationCriteresElements";

const EstimationCriteres = ({ text }) => {
    return (
        <CritereWrapper>
            <ArrowPink></ArrowPink>
            <Critere>{text}</Critere>
        </CritereWrapper>
    );
};

export default EstimationCriteres;
