import React, { useEffect } from 'react';
import { ModalContainer, ModalContent, ModalHeader, ModalTitle, ModalBody, ModalFooter, ModalCloseButton } from "./ModalElements";

const Modal = ({ onClose, show, title, text }) => {
    const closeOnEscapeKeyDown = (e) => {
        if ((e.charcode || e.keyCode) === 27) {
            onClose();
        }
    };

    useEffect(() => {
        document.body.addEventListener("keydown", closeOnEscapeKeyDown);
        return function cleanup() {
            document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ModalContainer onClick={onClose} show={show}>
            <ModalContent onClick={e => e.stopPropagation()}>
                <ModalHeader>
                    <ModalTitle>{title}</ModalTitle>
                </ModalHeader>
                <ModalBody>{text}</ModalBody>
                <ModalFooter>
                    <ModalCloseButton onClick={onClose}>Fermer</ModalCloseButton>
                </ModalFooter>
            </ModalContent>
        </ModalContainer>

    );
};

export default Modal;