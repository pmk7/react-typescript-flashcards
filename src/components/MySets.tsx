import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const MySets = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleButtonClick = () => {
    console.log("button clicked");
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Wrapper>
      <main className="my-sets">
        <h1>German</h1>
        <div className="sets-btns">
          <Button onClick={handleButtonClick}>Flashcards</Button>
          <Button onClick={handleButtonClick}>Learn</Button>
          <Button onClick={handleButtonClick}>Test</Button>
          <Button onClick={handleButtonClick}>Match</Button>
        </div>
        <div className="card-container">
          <div
            className={`card${isFlipped ? " flip" : ""}`}
            onClick={handleCardClick}
          >
            <div className="card-side german">Apfel</div>
            <div className="card-side english">Apple</div>
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .my-sets {
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    margin-top: 3rem;
    margin-bottom: 2rem;
    font-size: 2.5rem;
    text-align: center;
  }
  .card-container {
    width: 100%;
    max-width: 30rem;
    margin: 0 auto;
    padding: 1rem;
    perspective: 1000px;
  }

  .sets-btns {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .card {
    width: 100%;
    height: 15rem;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.8s;
    cursor: pointer;
    font-size: 3rem;
    box-shadow: var(--lightShadow);
  }

  .card.flip {
    transform: rotateY(180deg);
  }

  .card-side {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
  }

  .card-side.german {
    background-color: #f9f9f9;
  }

  .card-side.english {
    background-color: #e9e9e9;
    transform: rotateY(180deg);
  }

  @media only screen and (min-width: 768px) {
    .card-container {
      max-width: 40rem;
    }

    .card {
      height: 20rem;
    }
  }

  @media only screen and (min-width: 1200px) {
    .card-container {
      max-width: 50rem;
    }

    .card {
      height: 25rem;
    }
  }
`;

export default MySets;
