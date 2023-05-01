// Menu.js
import React, { useState } from "react";
import styled from "styled-components";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HamburgerMenu onClick={toggleMenu} className={menuOpen ? "change" : ""}>
      <Bar className="bar1" />
      <Bar className="bar2" />
      <Bar className="bar3" />
    </HamburgerMenu>
  );
};

const HamburgerMenu = styled.div`
  display: inline-block;
  cursor: pointer;
`;

const Bar = styled.div`
  width: 35px;
  height: 2px;
  background-color: #4255ff;
  margin: 6px 0;
  transition: 0.4s;

  &.bar1 {
    transform-origin: 10% 10%;
  }

  &.bar3 {
    transform-origin: 10% 90%;
  }

  ${HamburgerMenu}.change &.bar1 {
    transform: rotate(45deg);
  }

  ${HamburgerMenu}.change &.bar2 {
    opacity: 0;
  }

  ${HamburgerMenu}.change &.bar3 {
    transform: rotate(-45deg);
  }
`;

export default Menu;
