import React from "react";
import styled from "styled-components";
import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  const { menuOpen, closeMenu } = useAppContext();

  return (
    <SidebarContainer>
      <aside className={`${menuOpen ? "sidebar show-sidebar" : "sidebar"}`}>
        <ul className="links">
          <li>
            <Link onClick={closeMenu} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} to="/profile">
              Profile
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} to="/about">
              About
            </Link>
          </li>
        </ul>
      </aside>
    </SidebarContainer>
  );
};
const SidebarContainer = styled.div`
  padding: 1rem 1.5rem;

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--main-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: baseline;
    margin-bottom: 2rem;
    margin-top: 5rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--color-primary);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    color: var(--color-secondary);
  }
`;

export default Sidebar;
