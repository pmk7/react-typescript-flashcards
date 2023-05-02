import React, { useState } from "react";
import styled from "styled-components";
import logo2 from "../assets/logo2.svg";
import menu from "../assets/menu.svg";
import Button from "./Button";
import LinkButton from "./LinkButton";
import Sidebar from "./Sidebar";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const Navbar: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { closeMenu } = useAppContext();

  const handleClick = () => {
    console.log("btn clicked");
  };

  return (
    <Wrapper>
      <div className="navbar-container">
        <div className="nav-left">
          <div className="menu">
            <Menu />
          </div>
          <div className="logo-container">
            <Link to="/">
              <img
                className="logo"
                src={logo2}
                onClick={closeMenu}
                alt="logo"
              />
            </Link>
          </div>
          <ul className="nav-links-desktop">
            <li>
              <LinkButton to="/">Home</LinkButton>
            </li>
            <li>
              <LinkButton to="/mysets">My Sets</LinkButton>
            </li>
            <li>
              <LinkButton to="/about">About</LinkButton>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <ul className="nav-links">
            <li>
              <Button onClick={handleClick}>Login</Button>
            </li>
            <li>
              <Button onClick={handleClick}>Sign Up</Button>
            </li>
          </ul>
        </div>
      </div>
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
  height: 4rem;
  margin-top: 1rem;

  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 1rem;
  }

  .nav-left {
    display: flex;
    align-items: center;
  }

  .menu-button {
    cursor: pointer;
    background-color: white;
    border: none;
  }

  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  .logo {
    margin-left: 1rem;
    margin-bottom: 1rem;
    height: 3rem;
  }

  .nav-links-desktop {
    display: none;
    list-style: none;
    margin-left: 1rem;

    li {
      display: inline;
      margin-right: 1rem;
    }
  }

  .nav-right {
    display: flex;
    align-items: center;
  }

  .nav-links {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (min-width: 1200px) {
    .nav-links-desktop {
      display: flex;
    }

    .menu {
      display: none;
    }

    .logo {
      height: 4rem;
    }

    .logo-container {
    }
  }
`;

export default Navbar;
