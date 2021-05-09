import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from "react-scroll";
import { Nav, NavContainer, NavLogo, NavMenu, NavItem, NavLinkS, MobileIcon, NavLinkRouter } from "./NavbarElements";


const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    let slug = window.location.pathname;

    useEffect(() => {
        window.addEventListener("scroll", changeNav);
    }, []);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    const toggleHome = () => {
        scroll.scrollToTop();

    };
    return (
        <Nav scrollNav={slug === "/" ? scrollNav : true}>
            <NavContainer>
                <NavLogo to="/" onClick={toggleHome}>Amélie Dufour</NavLogo>
                <MobileIcon onClick={toggle} />
                {slug === "/" ?
                    <NavMenu>
                        <NavItem>
                            <NavLinkS to="biens" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Biens</NavLinkS>
                        </NavItem>
                        <NavItem>
                            <NavLinkS to="estimation" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Estimation</NavLinkS>
                        </NavItem>
                        <NavItem>
                            <NavLinkS to="aPropos" smooth={true} duration={500} spy={true} exact="true" offset={-80}>A Propos</NavLinkS>
                        </NavItem>
                        <NavItem>
                            <NavLinkS to="contact" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Contact</NavLinkS>
                        </NavItem>
                    </NavMenu>
                    :
                    <NavMenu>
                        <NavItem>
                            <NavLinkRouter to="/" render={(props) => window.location.reload()}>Retour</NavLinkRouter>
                        </NavItem>
                    </NavMenu>
                }
            </NavContainer>
        </Nav>
    );
};

export default Navbar;
