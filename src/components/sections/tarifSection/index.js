import React, { useState, useEffect } from 'react';
import sanityClient from "../../../client";
import { TarifContainer, TarifHeading, TarifImgWrapper, TarifImage } from "./TarifElements";

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
            <TarifHeading>{textData.titre}</TarifHeading>
            <TarifImgWrapper>
                <TarifImage src="images/tarif2.png" alt="tarif" />
            </TarifImgWrapper>
        </TarifContainer>
    );
};

export default Tarif;
