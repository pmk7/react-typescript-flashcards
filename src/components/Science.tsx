import React from "react";
import styled from "styled-components";
import scienceImage from "../assets/scienceImage.svg";

const Science = () => {
  return (
    <Wrapper>
      <div className="content">
        <h2>Unlock the Science of Learning</h2>
        <p>
          Spaced repetition is a scientifically proven learning technique that
          optimizes the intervals between study sessions to maximize long-term
          retention. By exposing you to new information just as you're about to
          forget it, our app reinforces neural connections and helps you achieve
          your language goals faster.
        </p>
      </div>
      <div className="image-container">
        <img className="science-image" src={scienceImage} alt="Science" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin: 1rem;

  .content {
    text-align: center;
    margin-bottom: 2rem;
    max-width: 600px;
  }

  .content * {
    margin: 1rem;
  }

  .image-container {
    perspective: 1500px;
  }

  .science-image {
    width: 100%;
    max-width: 600px;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    transform-style: preserve-3d;
  }

  .science-image:hover {
    transform: rotateY(20deg) translateY(-10px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: center;

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.4rem;
    }

    .content {
      text-align: left;
      margin-bottom: 0;
      /* margin-right: 2rem; */
    }
  }
`;

export default Science;
