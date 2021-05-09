import React from 'react';
import Video from "../../../video/interieur-moderne.mp4";
import PhoneCard from '../../cards/phoneCard';

import { HeroContainer, HeroBackground, VideoBackground, HeroContent, HeroTitle, HeroContactWrapper } from "./HeroElements";

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBackground>
                <VideoBackground autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBackground>
            <HeroContent>
                <HeroTitle>Concrétisons Ensemble Vos Projets Immobiliers</HeroTitle>
                <HeroContactWrapper>
                    <PhoneCard />
                </HeroContactWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
