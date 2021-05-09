import React from 'react';
import { FooterTitle, FooterWrap, FooterContactInfo, FooterContainer, FooterCopyright, FooterSocialMedia, CopyrightIcon, FacebookIcon, InstagramIcon } from "./FooterElements";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <img style={{ width: "55px", borderRadius: "10px" }} alt="logo" src="../../../images/logo/logoAD-sans-bg.png" />
                <FooterTitle>Amélie Dufour</FooterTitle>
                <FooterContactInfo>amelie.dufour@happy-immo.fr</FooterContactInfo>
                <FooterContactInfo>06 52 12 00 20</FooterContactInfo>
                <FooterSocialMedia>
                    <a href="https://www.facebook.com/ameliedufourhappyimmo" rel="noreferrer" target="_blank"><FacebookIcon /></a>
                    <a href="https://www.instagram.com/dufete/" rel="noreferrer" target="_blank"><InstagramIcon /></a>
                </FooterSocialMedia>
                <FooterCopyright><a style={{ textDecoration: "none", color: "#fff" }} href="https://www.facebook.com/fleurdalle" rel="noreferrer" target="_blank">Fleur Dalle</a><CopyrightIcon />2021 All rights reserved.</FooterCopyright>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;