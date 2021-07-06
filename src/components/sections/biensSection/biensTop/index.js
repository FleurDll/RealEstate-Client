import React, { useEffect, useLayoutEffect, useState } from 'react';
import { BiensTopContainer, HouseLocalisation, HouseImage, HouseBanner } from "./BiensTopElements"

const BiensTop = ({ localisation, statut, mainImageUrl, mainImageAlt }) => {
    const [containerHeight, setContainerHeight] = useState(null);
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            const ImgHeight = document.getElementById("img-container").getBoundingClientRect();
            if (ImgHeight.height !== 0) setContainerHeight(ImgHeight.height);
            setShowBanner(true);
        }, 1000 / 3);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    useLayoutEffect(() => {
        function updateSize() {
            const ImgHeight = document.getElementById("img-container").getBoundingClientRect();
            if (ImgHeight.height !== 0) setContainerHeight(ImgHeight.height);
        }
        window.addEventListener('resize', updateSize);
        updateSize();

        return () => window.removeEventListener('resize', updateSize);
    }, []);

    const renderBanner = (
        <HouseBanner containerHeight={containerHeight} src={`../../../../images/banners/${statut}.png`} alt="banière" />
    );

    return (
        <BiensTopContainer >
            <HouseLocalisation>{localisation}</HouseLocalisation>
            {statut !== "1" && showBanner && renderBanner}
            <HouseImage id="img-container" src={`${mainImageUrl}?q=80`} alt={mainImageAlt} />
        </BiensTopContainer>
    );
};

export default BiensTop;
