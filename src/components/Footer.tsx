import React from "react";
import styled from "styled-components";
import LinkButton from "./LinkButton";
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
          <li>
            <LinkButton to="/about">About</LinkButton>
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
  padding: 0 2rem;

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
`;

export default Footer;
