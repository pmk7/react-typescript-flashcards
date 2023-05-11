import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo2 from "../assets/logo2.svg";
import Button from "./Button";
import LinkButton from "./LinkButton";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./Loading";

const Navbar: React.FC = () => {
  const { closeMenu } = useAppContext();
  const { loginWithRedirect, logout, user, isLoading, isAuthenticated } =
    useAuth0();

  const [customLoading, setCustomLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCustomLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading && !isAuthenticated && customLoading) {
    return <Loading />;
  }
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
              <LinkButton to="/profile">Profile</LinkButton>
            </li>
            <li>
              <LinkButton to="/about">About</LinkButton>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <ul className="nav-links">
            <li>
              {!user ? (
                <Button onClick={() => loginWithRedirect()}>Login</Button>
              ) : null}
            </li>
            <li>
              {user ? (
                <Button
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Logout
                </Button>
              ) : (
                <Button onClick={() => loginWithRedirect()}>Sign Up</Button>
              )}
            </li>
          </ul>
        </div>
      </div>
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
    margin-left: 0.5rem;
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
    margin-top: 2rem;

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
