import React from "react";
import styled from "styled-components";
import mountain from "../assets/mountain.svg";
import { useAppContext } from "../context/AppContext";

const Hero = () => {
  const { loginWithRedirect, user } = useAppContext();

  return (
    <Wrapper>
      <img className="hero-img" src={mountain} alt="" />
      <div className="right-container">
        <div className="hero-text">
          <h1>Learn Languages in a Flash!</h1>
          <p>
            Master vocabulary and grammar effortlessly with captivating,
            interactive flashcards. Embark on your linguistic adventure today!
          </p>
          {!user ? (
            <button onClick={() => loginWithRedirect()} className="hero-btn">
              Sign Up
            </button>
          ) : null}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .hero-text * {
    margin: 1rem;
  }

  .hero-img {
    width: 100%;
    max-width: 100%;
    min-height: 25rem;
    object-fit: cover;
  }

  .right-container {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 1rem;
  }

  .hero-text {
    text-align: center;
  }

  .hero-text h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--main-yellow);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  .hero-text p {
    font-size: 1rem;
    line-height: 1.6;
    color: #333;
  }

  .hero-btn {
    font-size: 1rem;
    padding: 0.5rem 1.5rem;
    background-color: var(--main-yellow);
    color: #fff;
    border: none;
    border-radius: 4px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    transition: background-color 0.3s, box-shadow 0.3s;

    &:hover {
      background-color: #1558c5;
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.7);
    }
  }

  @media screen and (min-width: 768px) {
    .right-container {
      margin-top: 5rem;
      margin-left: 10rem;
      top: 0;
      width: 50%;
      padding: 0;
      align-items: flex-start;
      /* border: solid red 1px; */
    }

    .hero-text {
      text-align: right;
    }

    .hero-text h1 {
      font-size: 2.5rem;
    }

    .hero-text p {
      font-size: 1.2rem;
    }

    .hero-btn {
      font-size: 1.2rem;
      padding: 1rem 2rem;
    }
  }
  @media screen and (min-width: 1200px) {
    .right-container {
      margin-top: 5rem;
      margin-left: 10rem;
      top: 0;
      width: 50%;
      padding: 0;
      align-items: flex-start;
      /* border: solid red 1px; */
    }

    .hero-text {
      text-align: right;
    }

    .hero-text h1 {
      font-size: 2.5rem;
    }

    .hero-text p {
      font-size: 1.7rem;
    }

    .hero-btn {
      font-size: 1.2rem;
      padding: 1rem 2rem;
    }
  }
`;

export default Hero;
