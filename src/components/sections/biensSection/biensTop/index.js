import React from 'react';
import { BiensTopContainer, HouseLocalisation, HouseBanner, HouseImage } from "./BiensTopElements"

const BiensTop = ({ localisation, statut, mainImageUrl, mainImageAlt }) => {
    return (
        <BiensTopContainer>
            <HouseLocalisation>{localisation}</HouseLocalisation>
            {statut !== "1" && <HouseBanner src={`../../../../images/banners/${statut}.png`} alt="banière" />}
            <HouseImage src={mainImageUrl} alt={mainImageAlt} />
        </BiensTopContainer>
    );
};

export default BiensTop;
