import React, { useState, useEffect } from 'react';
import sanityClient from "../../../client";
import BlockContent from "@sanity/block-content-to-react";
import PhoneCard from "../../cards/phoneCard";
import EmailCard from "../../cards/emailCard";
import { AProposContainer, AProposWrapper, Column, TextWrapper, TopLine, Heading, Subtitle, ContactWrapper, EmailCardWrapper, ProfileImageWrapper, ProfileImage } from "./AProposElements";

const APropos = () => {
    const [textData, setTextData] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "aProposText"]{
                text1,
                text2,
                text3,
                imageProfile {
                    asset->{
                        _id, 
                        url
                    }
                }
        }`)
            .then((data) => setTextData(data))
            .catch(console.error);
    }, []);

    if (!textData) return <div></div>;

    return (
        <AProposContainer id="aPropos">
            <AProposWrapper>
                <Column>
                    <TextWrapper>
                        <TopLine>{textData[0].text1}</TopLine>
                        <Heading>{textData[0].text2}</Heading>
                        <Subtitle><BlockContent blocks={textData[0].text3} projectId="m02nlpav" dataset="production" /></Subtitle>
                    </TextWrapper>
                    <ContactWrapper>
                        <PhoneCard />
                        <EmailCardWrapper to="contact" smooth={true} duration={500} spy={true} exact="true" offset={-80} >
                            <EmailCard />
                        </EmailCardWrapper>
                    </ContactWrapper>
                </Column>
                <Column>
                    <ProfileImageWrapper>
                        <ProfileImage src={textData[0].imageProfile.asset.url} alt="Photo Amélie Dufour" />
                    </ProfileImageWrapper>
                </Column>
            </AProposWrapper>
        </AProposContainer>
    );
};

export default APropos;
