import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from "./SidebarElements";

const SideBar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon onClick={toggle} />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="biens" offset={-80} onClick={toggle}>Biens</SidebarLink>
                    <SidebarLink to="estimation" offset={-80} onClick={toggle}>Estimation</SidebarLink>
                    <SidebarLink to="aPropos" offset={-80} onClick={toggle}>A Propos</SidebarLink>
                    <SidebarLink to="contact" offset={-80} onClick={toggle}>Contact</SidebarLink>
                    <SidebarLink to="honoraires" offset={-80} onClick={toggle}>Honoraires</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default SideBar;
