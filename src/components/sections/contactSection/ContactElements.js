import styled, { keyframes } from "styled-components";
import { VscLoading } from "react-icons/vsc";
import { BiCheck } from "react-icons/bi";

export const ContactContainer = styled.div`
    color: #000;
    background: #F0F2F5;
`;

export const ContactWrap = styled.div`
    display: flex;
    z-index: 1;
    height: auto;
    width: 100%;
    max-width: 1100px;
    margin: auto;
    padding: 60px 24px;
    justify-content: center;

    @media screen and (max-width: 768px) {
        padding: 40px 10px;
    }
`;

export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContactH1 = styled.h1`
    margin: 10px;
    color: #383838;
    font-size: 48px;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

const spin = keyframes`
        to {transform: rotate(360deg);}
`;

export const LoadingIcon = styled(VscLoading)`
    margin-top: 20px;
    font-size: 35px;
    color: #484848;
    animation: ${spin} 2s linear infinite;
`;

const validate = keyframes`
    to {transform: rotate(360deg)}
`;

export const ConfirmIcon = styled(BiCheck)`
    border: solid;
    border-radius: 10px;
    background: linear-gradient(45deg, #4ae491,  #28a745);
    ${'' /* background: #28a745; */}
    margin-top: 20px;
    font-size: 50px;
    color: #fff;
    animation: ${validate} 0.8s linear;
`;

export const SendButtonWrap = styled.div`
    
`;