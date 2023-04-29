import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.svg";
import menu from "../assets/menu.svg";
import Button from "./Button";
import LinkButton from "./LinkButton";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleClick = () => {
    console.log("btn clicked");
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <Wrapper>
      <NavbarContainer>
        <NavLeft>
          <MenuButton onClick={toggleSidebar}>
            <img src={menu} alt="menu" />
          </MenuButton>
          <Logo src={logo2} alt="logo" />
          <NavLinksDesktop>
            <li>
              <LinkButton to="/">Home</LinkButton>
            </li>
            <li>
              <LinkButton to="/mysets">My Sets</LinkButton>
            </li>
            <li>
              <LinkButton to="/about">About</LinkButton>
            </li>
            <li>
              <LinkButton to="/contact">Contact</LinkButton>
            </li>
          </NavLinksDesktop>
        </NavLeft>
        <NavRight>
          <NavLinks>
            <li>
              <Button onClick={handleClick}>Login</Button>
            </li>
            <li>
              <Button onClick={handleClick}>Sign Up</Button>
            </li>
          </NavLinks>
        </NavRight>
      </NavbarContainer>
      {showSidebar && <Sidebar />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: white;
  padding: 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
`;
const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 1rem;
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
`;

const MenuButton = styled.button`
  cursor: pointer;
  height: 2rem;
  background-color: white;
  border: none;
  display: inline-flex;

  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

const Logo = styled.img`
  height: 3rem;
  margin-left: 1rem;

  @media screen and (min-width: 1200px) {
    height: 5rem;
  }
`;

const NavLinksDesktop = styled.ul`
  display: none;
  list-style: none;
  margin-left: 1rem;

  li {
    display: inline;
    margin-right: 1rem;
  }

  @media screen and (min-width: 1200px) {
    display: flex;
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 1200px) {
  }
`;

export default Navbar;
