import styled from "styled-components";

export const ModalContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;

    opacity: 0;
    transition: all 0.3s ease-in-out;
    pointer-events: none;

    opacity: ${({ show }) => (show ? "1" : "")};
    pointer-events: ${({ show }) => (show ? "visible" : "invisible")};
    ${'' /* transform: ${({ show }) => (show ? "translateY(0)" : "")}; */}
`;

export const ModalContent = styled.div`
    width: 500px;
    background-color: #fff;
    ${'' /* transform: translateY(-200px); */}
    transition: all 0.3s ease-in-out;
    border-radius: 0.1875rem;
    ${'' /* transform: ${({ show }) => (show ? "translateY(0)" : "")}; */}

    @media screen and (max-width: 500px) {
        max-width: 320px;
    }
`;

export const ModalHeader = styled.div`
    padding: 10px;
`;

export const ModalTitle = styled.h2`
    color:  #383838;
`;

export const ModalBody = styled.div`
    padding: 10px;
    border-top: 1px solid #eee;
    ${'' /* border-bottom: 1px solid #eee; */}
    color: 	#696969;
`;

export const ModalFooter = styled.div`
    padding: 10px;
`;

export const ModalCloseButton = styled.button`
    border: none;
    display: inline-block;
    font-size: 16px;
    margin: 10px 0;
    color: #fff;
    border-radius: 50px;
    background: #0076b3;
    padding: 12px;
    text-align: center;
    letter-spacing: 1px;
    box-shadow: rgb(0 0 0 / 30%) 0px 0.0625rem 0.1875rem 0px;
    cursor: pointer;
    float: right;

    &:hover{
        transform: scale(1.04, 1.04);
    }
`;