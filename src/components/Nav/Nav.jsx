import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import dresteinLogo from "../../assets/dresteinLogo.svg";
import saveethalogo from "../../assets/logo.webp";
import Mobilenav from "./Mobilenav";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import "./styles/HambBurger.css";
import { HashLink as Link } from "react-router-hash-link";
import NavMenu from './NavMenu';  // <-- Import NavMenu

// Styled components for Navbar
const Navbar = styled.nav`
  color: rgb(255, 255, 255);
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(10px);
  padding-bottom: 3rem;
  border-radius: 0 0 10px 10px;
  z-index: 1000000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 0 0 1rem;
  width: 100%;
  position: sticky;
  top: 0;
  box-shadow: 0px 1px 2px rgba(0, 100, 0, 0.5), 
            0px 2px 4px rgba(0, 100, 0, 0.5), 
            0px 4px 8px rgba(0, 100, 0, 0.5), 
            0px 8px 16px rgba(0, 100, 0, 0.5);

  @media screen and (max-width: 600px) {
    top: -80px;
    box-shadow: 0px 1px 2px rgba(0, 100, 0, 0.5), 
            0px 2px 4px rgba(0, 100, 0, 0.5), 
            0px 4px 8px rgba(0, 100, 0, 0.5), 
            0px 8px 16px rgba(0, 100, 0, 0.5);

    flex-direction: column;
    gap: 20px;
    padding-left: 0;
  }
`;

const SLogo = styled.img`
  width: 23%;
  height: auto;
  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

const rotate = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

const DLogo = styled.img`
  width: 22%;
  margin-right: 10px;
  animation: ${rotate} 7s infinite linear;
  transform-origin: center;
  @media screen and (max-width: 600px) {
    width: 16%;
  }
`;

const LogoHead = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 600px) {
    width: 80%;
    margin-left: 3rem;
  }
`;

const EventLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100px;
`;

const DresteinLetter = styled.p`
  font-size: 2.2vw;
  font-family: "x", sans-serif;
  letter-spacing: 1.5px;
  color: rgb(255, 255, 255);
  align-self: center;
  text-align: center;
  height: auto;
  @media screen and (max-width: 600px) {
    font-size: 7vw;
  }
`;

const Year = styled.p`
  font-size: 1vw;
  font-family: "x", sans-serif;
  font-weight: 800;
  color: rgb(255, 255, 255);
  text-align: center;
  height: auto;
  letter-spacing: 0.8em;
  margin-left: 1.5em;
  @media screen and (max-width: 600px) {
    font-size: 3vw;
  }
`;

// Adding glowing effect to NavItem
const NavItem = styled.a`
  color: #fff;  /* Text color */
  text-transform: uppercase;  /* Uppercase text */
  font-size: 1.4vw;  /* Font size for the buttons */
  cursor: pointer;  /* Pointer cursor on hover */
  text-decoration: none;  /* No underline */
  padding: 10px 19px;  /* Padding for the buttons */
  border-radius: 5px;  /* Rounded corners */
  transition: 0.3s ease-in-out;  /* Transition effect */

  /* Initial box-shadow (no glow) */
  box-shadow: inset 0px 0px 5px rgba(0, 100, 0, 0.1), 0px 0px 10px rgba(0, 100, 0, 0.3); /* Dark green shadow */

  &:hover {
    /* On hover, add glowing effect with stronger shadows */
    box-shadow: 0px 0px 15px rgba(0, 100, 0, 0.8), 0px 0px 30px rgba(0, 100, 0, 0.5), 0px 0px 45px rgba(0, 100, 0, 1); /* Dark green glow */
    transform: translateY(-3px); /* Slight lift effect */
  }
`;



const NavHead = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const MobileNavHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
  position: sticky;
  top: 0;
  align-self: flex-start;
`;

// Main Nav component
function Nav() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Navbar className="navbar">
      <SLogo src={saveethalogo} />
      <NavHead>
        <Link style={{ textDecoration: "inherit" }} to="/#">
          <NavItem>HOME</NavItem>
        </Link>
        <Link style={{ textDecoration: "inherit" }} to="/Departments#">
          <NavItem>DEPARTMENTS</NavItem>
        </Link>
        <Link style={{ textDecoration: "inherit" }} to="/Events#">
          <NavItem>EVENTS</NavItem>
        </Link>
        <Link style={{ textDecoration: "inherit" }} to="/form#">
          <NavItem>REGISTER</NavItem>
        </Link>
        <Link style={{ textDecoration: "inherit" }} to="/Ab#">
          <NavItem>About Us</NavItem>
        </Link>

        {/* Add NavMenu component */}
        <NavMenu />
      </NavHead>

      <Mobilenav openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div className="icon" onClick={() => setOpenMenu(!openMenu)}>
        {openMenu ? <CgClose /> : <HiOutlineMenuAlt1 />}
      </div>

      <MobileNavHeader>
        <Link to="/#" style={{ textDecoration: "none" }}>
          <LogoHead>
            <DLogo src={dresteinLogo} alt="DresteinLogo" />
            <EventLogo>
              <DresteinLetter color="red">DRESTEIN</DresteinLetter>
              <Year>2 0 2 4</Year>
            </EventLogo>
          </LogoHead>
        </Link>
      </MobileNavHeader>
    </Navbar>
  );
}

export default Nav; 