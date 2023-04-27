import React from "react";
import styled from "styled-components";
import close from "../assets/x.svg";

const Sidebar = () => {
  return (
    <Wrapper>
      <nav>
        <button
          className="close-btn"
          onClick={() => console.log("Close sidebar")}
        >
          <img src={close} alt="Close sidebar" />
        </button>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">My Sets</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  :root {
    --color-primary: #f06292;
  }

  width: 20%;
  margin-right: 2rem;

  nav {
    ul {
      padding: 0;
    }

    li {
      padding: 1rem 0;
      font-size: 1.2rem;
    }

    a {
      color: var(--color-primary);
      text-decoration: none;

      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }

    .close-btn {
      background: none;
      border: none;
      cursor: pointer;
      display: block;
      padding: 0.5rem;
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
    }
  }
`;

export default Sidebar;
