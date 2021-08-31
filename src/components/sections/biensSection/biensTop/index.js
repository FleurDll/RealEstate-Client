import React from 'react';
import { BiensTopContainer, LocalisationBanner, HouseImage, StatusBanner } from "./BiensTopElements"

const BiensTop = ({ localisation, statut, mainImageUrl, mainImageAlt }) => {
    const renderBanner = (
        <StatusBanner src={`../../../../images/banners/${statut}.png`} alt="banière" />
    );

    return (
        <BiensTopContainer >
            <LocalisationBanner>{localisation}</LocalisationBanner>
            {statut !== "1" && renderBanner}
            <HouseImage id="img-container" src={`${mainImageUrl}?q=80`} alt={mainImageAlt} />
        </BiensTopContainer>
    );
};

export default BiensTop;
