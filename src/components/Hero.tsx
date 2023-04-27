import React from "react";
import styled from "styled-components";
import hero from "../assets/hero.jpg";

const Hero = () => {
  return (
    <Wrapper>
      <section className="section-hero">
        <div className="hero-container">
          <img className="hero-img" src={hero} alt="" />
          <div className="hero-text">
            <h1>Make Learning Languages Easy!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. A odit
              fuga suscipit!
            </p>
            <button className="signup-btn">Sign Up Now!</button>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .section-hero {
  }
  .hero-container {
    position: relative;
    display: flex;
    align-items: center;
  }

  .hero-text * {
    margin: 1rem;
  }

  .hero-img {
    width: 100%;
    max-width: 100%;
    min-height: 25rem;
    object-fit: cover;
  }

  .hero-text {
    position: absolute;
    margin-top: 2rem;
    margin-left: 2rem;
    top: 10px;
    width: 50%;
  }

  .signup-btn {
    background-color: var(--color-primary);
    border-radius: 8px;
    border-style: none;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
    height: 3rem;
    line-height: 20px;
    list-style: none;
    outline: none;
    padding: 10px 16px;
    position: relative;
    text-align: center;
    text-decoration: none;
    transition: color 100ms;
    vertical-align: baseline;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  /* .signup-btn:hover,
  .signup-btn:focus {
    background-color: #f082ac;
  } */
`;

export default Hero;
