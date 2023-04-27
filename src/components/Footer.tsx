import React from "react";
import styled from "styled-components";
import social1 from "../assets/github.svg";
import social2 from "../assets/linkedin.svg";
import LinkButton from "./LinkButton";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-left">
        <ul>
          <li>
            <a href="#">
              <img src={social2} alt="github" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={social1} alt="linkedin" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-right">
        <ul>
          <li>
            <LinkButton to="/about">About</LinkButton>
          </li>
          <li>
            <LinkButton to="/contact">Contact</LinkButton>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: 3rem;
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
