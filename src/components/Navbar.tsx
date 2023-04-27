import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import menu from "../assets/menu.svg";
import Button from "./Button";
import LinkButton from "./LinkButton";

const Navbar = () => {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <Wrapper>
      <nav id="navbar">
        <div className="nav-left">
          <button className="menu-btn">
            <img src={menu} alt="menu" />
          </button>
          <div className="nav-logo"></div>
          <div>
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
              <li>
                <LinkButton to="/contact">Contact</LinkButton>
              </li>
            </ul>
          </div>
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
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  #navbar {
    background-color: white;
    padding: 0.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .menu-btn {
    cursor: pointer;
    height: 2rem;
    background-color: white;
  }

  .nav-left {
    display: flex;
    align-items: center;
    margin-left: 1rem;
  }

  .nav-left button {
    border: none;
  }

  .nav-links-desktop {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-right {
    display: flex;
    align-items: center;
    margin-right: 1rem;
  }

  .nav-links {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-links li {
    margin-left: 1rem;
    text-decoration: none;
  }
`;

export default Navbar;
