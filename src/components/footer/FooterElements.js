import styled, { css } from "styled-components";
import { BiCopyright } from "react-icons/bi";
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io5";

export const FooterContainer = styled.div`
    background: #0076b3;
    color: #fff;
`;

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FooterTitle = styled.h1`
    margin: 20px;
`;

export const FooterContactInfo = styled.h3`
    color: #F0F0F0;
    margin: 5px;
    font-size: 18px;
`;

export const FooterCopyright = styled.div`
    font-size: 12px;
`;

export const FooterSocialMedia = styled.a`
    margin: 20px;
`;

export const CopyrightIcon = styled(BiCopyright)`
`;

const socialMediaIcon = css`
    color: #fff;
    font-size: 25px;
    margin: 10px;
    cursor: pointer;

    &:hover{
        color: #FF6584;
    }
`;

export const FacebookIcon = styled(IoLogoFacebook)`
    ${socialMediaIcon}
`;
export const InstagramIcon = styled(IoLogoInstagram)`
    ${socialMediaIcon}
`;
export const TwitterIcon = styled(IoLogoTwitter)`
    ${socialMediaIcon}
`;
export const LinkedinIcon = styled(IoLogoLinkedin)`
    ${socialMediaIcon}
`;