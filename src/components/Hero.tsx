import React from "react";
import styled from "styled-components";
import hero from "../assets/hero.jpg";
import Button from "./Button";

const Hero = () => {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <Wrapper>
      <div className="hero-container">
        <img className="hero-img" src={hero} alt="" />
        <div className="hero-text">
          <h1>Make Learning Languages Easy!</h1>
          <p>
            I'm baby twee adaptogen viral tumblr mumblecore YOLO knausgaard
            pabst PBR&B aesthetic la croix. Kitsch selfies bespoke kickstarter 3
            wolf moon, woke tumeric tbh. 3 wolf moon authentic literally
            lumbersexual, humblebrag selfies thundercats disrupt lomo health
            goth kale chips.
          </p>
          <Button onClick={handleClick}>Sign Up</Button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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

  @media screen and (min-width: 1200px) {
    .hero-text {
      font-size: 1.5rem;
      margin-left: 5rem;
    }
  }
`;

export default Hero;
