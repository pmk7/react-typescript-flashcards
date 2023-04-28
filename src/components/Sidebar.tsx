import React, { MouseEvent } from "react"; // Change MouseEvent to ReactMouseEvent
import styled from "styled-components";
import close from "../assets/x.svg";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const handleClose = (event: MouseEvent<HTMLButtonElement>) => {
    // Change MouseEvent to ReactMouseEvent
    console.log("Close sidebar");
  };

  return (
    <Wrapper>
      <CloseButton onClick={handleClose}>
        <img src={close} alt="Close sidebar" />
      </CloseButton>
      <NavList>
        <NavItem>
          <NavLink href="#">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">My Sets</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Contact</NavLink>
        </NavItem>
      </NavList>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: var(--color-primary);
  width: 20%;
  margin-right: 2rem;
  height: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: block;
  padding: 1rem;
  position: relative;
  text-align: right;
  width: 100%;

  &:hover img,
  &:focus img {
    filter: brightness(0.8);
  }

  img {
    height: 24px;
    width: 24px;
  }
`;

const NavList = styled.ul`
  padding: 0;
  margin-top: 2rem;
  list-style-type: none;
`;

const NavItem = styled.li`
  padding: 1rem 0;
  font-size: 1.2rem;
`;

const NavLink = styled.a`
  color: var(--color-primary);
  text-decoration: none;
  display: block;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.2s;

  &:hover,
  &:focus {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export default Sidebar;
