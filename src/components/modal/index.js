import React, { useEffect } from 'react';
import { ModalContainer, ModalContent, ModalHeader, ModalTitle, ModalBody, ModalFooter, ModalCloseButton } from "./ModalElements";

const Modal = (props) => {
    const closeOnEscapeKeyDown = (e) => {
        if ((e.charcode || e.keyCode) === 27) {
            props.onClose();
        }
    };

    useEffect(() => {
        document.body.addEventListener("keydown", closeOnEscapeKeyDown);
        return function cleanup() {
            document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
        }
    }, []);

    return (
        <ModalContainer onClick={props.onClose} show={props.show}>
            <ModalContent onClick={e => e.stopPropagation()}>
                <ModalHeader>
                    <ModalTitle>{props.title}</ModalTitle>
                </ModalHeader>
                <ModalBody>{props.text}</ModalBody>
                <ModalFooter>
                    <ModalCloseButton onClick={props.onClose}>Fermer</ModalCloseButton>
                </ModalFooter>
            </ModalContent>
        </ModalContainer>

    );
};

export default Modal;