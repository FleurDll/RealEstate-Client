import React, { useState, useEffect } from 'react';
import sanityClient from "../../client";
import { FooterTitle, FooterWrap, FooterContactInfo, FooterContainer, FooterCopyright, FooterSocialMedia, CopyrightIcon, FacebookIcon, InstagramIcon } from "./FooterElements";

const Footer = () => {
    const [textData, setTextData] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "infoPerso"]{
                nom,
                phone,
                email,
                facebook,
                instagram
        }`)
            .then((data) => setTextData(data[0]))
            .catch(console.error);
    }, []);

    const currentYear = new Date().getFullYear();

    if (!textData) return (
        <FooterContainer>
            <FooterWrap>
                <img style={{ width: "55px", borderRadius: "10px" }} alt="logo" src="images/logo/logo2-sans-bg.png" />
                <FooterTitle>Amélie Dufour</FooterTitle>
                <FooterContactInfo>amelie.dufour@happy-immo.fr</FooterContactInfo>
                <FooterContactInfo>06 52 12 00 20</FooterContactInfo>
                <FooterSocialMedia>
                    <a href="https://www.facebook.com/ameliedufourhappyimmo" rel="noreferrer" target="_blank"><FacebookIcon /></a>
                    <a href="https://www.instagram.com/dufete/" rel="noreferrer" target="_blank"><InstagramIcon /></a>
                </FooterSocialMedia>
                <FooterCopyright>Fleur Dalle<CopyrightIcon />{currentYear} All rights reserved.</FooterCopyright>
            </FooterWrap>
        </FooterContainer>
    );

    return (
        <FooterContainer>
            <FooterWrap>
                <img style={{ width: "55px", borderRadius: "10px" }} alt="logo" src="images/logo/logo2-sans-bg.png" />
                <FooterTitle>{textData.nom}</FooterTitle>
                <FooterContactInfo>{textData.email}</FooterContactInfo>
                <FooterContactInfo>{textData.phone}</FooterContactInfo>
                <FooterSocialMedia>
                    <a href={textData.facebook} rel="noreferrer" target="_blank"><FacebookIcon /></a>
                    <a href={textData.instagram} rel="noreferrer" target="_blank"><InstagramIcon /></a>
                </FooterSocialMedia>
                <FooterCopyright>Fleur Dalle<CopyrightIcon />{currentYear} All rights reserved.</FooterCopyright>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;