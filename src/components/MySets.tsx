import React, { useState } from "react";
import styled from "styled-components";

const MySets = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Wrapper>
      <main className="my-sets">
        <h1>German</h1>
        <div className="sets-buttons">
          <button>Flashcards</button>
          <button>Learn</button>
          <button>Test</button>
          <button>Match</button>
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
  .card-container {
    perspective: 1000px;
    width: 30rem;
    height: 20rem;
  }

  .card {
    width: 100%;
    height: 100%;
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
`;

export default MySets;
