import React, { useState } from 'react';
import Navbar from '../components/navigation/navbar';
import Sidebar from "../components/navigation/sidebar";
import HeroSection from '../components/sections/heroSection';
import Biens from '../components/sections/biensSection';
import Estimation from "../components/sections/estimationSection";
import APropos from '../components/sections/aProposSection';
import Contact from '../components/sections/contactSection';
import Modal from "../components/modal";

import Tarif from '../components/sections/tarifSection';

const Home = ({ emailJSKey }) => {
    const [showModal, setShowModal] = useState(false);
    const [showModalError, setShowModalError] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <Biens />
            <Estimation />
            <APropos />
            <Contact
                emailJSKey={emailJSKey}
                setShowModal={setShowModal}
                showModal={showModal}
                setShowModalError={setShowModalError}
                showModalError={showModalError}
            />
            <Tarif />
            <Modal
                title="Message Envoyé !"
                text="Merci, je vous répondrai au plus vite."
                onClose={() => setShowModal(false)}
                show={showModal}
            />
            <Modal
                title="Il y a eu une erreur..."
                text="Veuillez réessayer ultérieurement, merci."
                onClose={() => setShowModalError(false)}
                show={showModalError}
            />
        </div>
    );
};

export default Home;
