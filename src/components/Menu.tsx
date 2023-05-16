import React from "react";
import styled from "styled-components";
import { useAppContext } from "../context/AppContext";

const Menu: React.FC = () => {
  const { menuOpen, toggleMenu } = useAppContext();

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

  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export default Menu;
