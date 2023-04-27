import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import menu from "../assets/menu.svg";

const Navbar = () => {
  return (
    <Wrapper>
      <nav id="navbar">
        <div className="nav-left">
          <img id="menu" src={menu} alt="menu" />
          <div className="nav-logo">
            <img className="logo" src={logo} alt="logo" />
          </div>
          <div>
            <ul className="nav-links-desktop">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="mysets.html">My Sets</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-right">
          <ul className="nav-links">
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Sign Up</a>
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

  #menu {
    cursor: pointer;
    height: 2rem;
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
    display: none;
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

  .logo {
    height: 7rem;
    width: 7rem;
    padding: 0;
    margin-left: 1rem;
  }

  .sticky {
    height: 5rem;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
  }

  #navbar-placeholder {
    height: 0.5rem;
  }
`;

export default Navbar;
