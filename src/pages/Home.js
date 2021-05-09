import React, { useState } from 'react';
import Biens from '../components/sections/biensSection';
import HeroSection from '../components/sections/heroSection';
import Estimation from "../components/sections/estimationSection";
import APropos from '../components/sections/aProposSection';
import Contact from '../components/sections/contactSection';
import Modal from "../components/modal";

const Home = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
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
