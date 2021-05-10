import React, { useEffect, useState } from 'react';
import sanityClient from "../../../client";
import Video from "../../../video/interieur-moderne.mp4";
import PhoneCard from '../../cards/phoneCard';
import { HeroContainer, HeroBackground, VideoBackground, HeroContent, HeroTitle, HeroContactWrapper, NoDataContainer, NoDataMessage } from "./HeroElements";

const HeroSection = () => {
    const [textData, setTextData] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "enTeteText"]{
                titre
        }`)
            .then((data) => setTextData(data))
            .catch(console.error);
    }, []);

    if (!textData) return (
        <NoDataContainer>
            <NoDataMessage>
                Oh oh, une erreur s'est produite...
            <br></br>
                Veuillez réessayer plus tard.
            </NoDataMessage>
        </NoDataContainer>
    );

    return (
        <HeroContainer>
            <HeroBackground>
                <VideoBackground autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBackground>
            <HeroContent>
                <HeroTitle>{textData[0].titre}</HeroTitle>
                <HeroContactWrapper>
                    <PhoneCard />
                </HeroContactWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
