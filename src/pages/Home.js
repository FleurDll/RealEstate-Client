import React, { useState } from 'react';
import Biens from '../components/sections/biensSection';
import HeroSection from '../components/sections/heroSection';
import Estimation from "../components/sections/estimationSection";
import APropos from '../components/sections/aProposSection';
import Contact from '../components/sections/contactSection';
import Modal from "../components/modal";
import Navbar from '../components/navigation/navbar';
import Sidebar from "../components/navigation/sidebar";

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    /* let slug = window.location.pathname; */

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
            <Contact setShowModal={setShowModal} showModal={showModal} />
            <Modal
                title="Message Envoyé !"
                text="Merci, je vous répondrai au plus vite."
                onClose={() => setShowModal(false)}
                show={showModal}
            />
        </div>
    );
};

export default Home;
