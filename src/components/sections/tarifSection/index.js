import React from 'react';
import { TarifContainer, TarifHeading, TarifImgWrapper, TarifImage } from "./TarifElements";

const Tarif = () => {
    return (
        <TarifContainer id="tarif">
            <TarifHeading>Honoraires</TarifHeading>
            <TarifImgWrapper>
                <TarifImage src="images/tarif2.png" alt="tarif" />
            </TarifImgWrapper>
        </TarifContainer>
    );
};

export default Tarif;
