import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import githubLogo from "../assets/githubLogo.svg";
import linkedinLogo from "../assets/linkedinLogo.svg";
import codewarsLogo from "../assets/codewarsLogo.svg";

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <div className="footer-left">
        <ul>
          <li>
            <a href="https://github.com/pmk7">
              <img src={githubLogo} alt="github" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/philipkeogh/">
              <img src={linkedinLogo} alt="linkedin" />
            </a>
          </li>
          <li>
            <a href="https://www.codewars.com/users/pmk7">
              <img src={codewarsLogo} alt="codewars" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-right">
        <ul>
          <li className="about">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 0 1rem;

  ul {
    display: flex;
    list-style-type: none;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0 0.5rem;
  }

  a {
    display: inline-block;
  }

  img {
    width: 24px;
    height: 24px;
  }

  .footer-right .about {
    font-size: 1.2rem;
    color: var(--color-primary);
  }

  .footer-right .about a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s;
  }

  .footer-right .about a:hover,
  .footer-right .about a:focus {
    color: var(--color-secondary);
    text-decoration: underline;
  }
`;

export default Footer;
