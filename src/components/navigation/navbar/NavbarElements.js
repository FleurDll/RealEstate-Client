import styled, { css } from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? "#0076b3" : "transparent")};

    background: ${({ slug }) => (slug !== "/" && "#0076b3")};

    color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 80px;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    margin-top: -80px;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    display: flex;
    justify-self: flex-start;
    align-items: center;
    color: #fff;
    ${'' /* color: #ff6584; */}
    cursor: pointer;
    font-size: 1.5rem;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const MobileIcon = styled(FaBars)`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const styledLink = css`
    color: #fff;
    ${'' /* color: #ff6584; */}
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #FF6584;
    }
`;

export const NavLinkS = styled(LinkS)`
    ${styledLink}
`;

export const NavLinkRouter = styled(LinkR)`
    ${styledLink}
`;

export const NavLinkRouterSmallScreen = styled(LinkR)`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        ${styledLink}
    }
`;