import React, { useState, useEffect } from 'react';
import sanityClient from "../../../client";
import { TarifContainer, TarifHeadingWrapper, TarifHeading, TarifSubtitle, TarifImgWrapper, TarifImage, LogoHappyImmo } from "./TarifElements";

const Tarif = () => {
    const [textData, setTextData] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "honoraires"]{
                titre,
                source,
                logoHappyImmo,
                imageHonoraires {
                    asset->{
                        _id, 
                        url
                    }
                }
        }`)
            .then((data) => setTextData(data[0]))
            .catch(console.error);
    }, []);

    if (!textData) return <div></div>;

    return (
        <TarifContainer id="honoraires">
            <TarifHeadingWrapper>
                <TarifHeading>{textData.titre}</TarifHeading>
                <TarifSubtitle>{textData.source}
                    {textData.logoHappyImmo === "oui" && <LogoHappyImmo src="images/logo/happy-immo-logo-sans-bg.png" alt="logo Happy-Immo" />}
                </TarifSubtitle>
            </TarifHeadingWrapper>
            <TarifImgWrapper>
                <TarifImage src={textData.imageHonoraires.asset.url} alt="tarif" />
            </TarifImgWrapper>
        </TarifContainer>
    );
};

export default Tarif;
