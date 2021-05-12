import React, { useState, useEffect } from 'react';
import sanityClient from "../../../client";
import { TarifContainer, TarifHeadingWrapper, TarifHeading, TarifImgWrapper, TarifImage, LogoHappyImmo } from "./TarifElements";

const Tarif = () => {
    const [textData, setTextData] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "honoraires"]{
                titre
        }`)
            .then((data) => setTextData(data[0]))
            .catch(console.error);
    }, []);

    if (!textData) return <div></div>;

    return (
        <TarifContainer id="honoraires">
            <TarifHeadingWrapper>
                <TarifHeading>{textData.titre}</TarifHeading>
                <LogoHappyImmo src="images/logo/happy-immo-logo-sans-bg.png" alt="logo Happy-Immo" />
            </TarifHeadingWrapper>
            <TarifImgWrapper>
                <TarifImage src="images/tarif5.png" alt="tarif" />
            </TarifImgWrapper>
        </TarifContainer>
    );
};

export default Tarif;
