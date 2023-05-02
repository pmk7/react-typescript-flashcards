// Flashcard.tsx
import React, { useState } from "react";
import styled from "styled-components";

interface FlashcardProps {
  front: string;
  back: string;
}

const Flashcard: React.FC<FlashcardProps> = ({ front, back }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Card onClick={flipCard} className={isFlipped ? "flipped" : ""}>
      <CardContent className="front">{front}</CardContent>
      <CardContent className="back">{back}</CardContent>
    </Card>
  );
};

const Card = styled.div`
  width: 340px;
  height: 380px;
  perspective: 1000px;
  cursor: pointer;

  &:hover {
    .front,
    .back {
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  }

  &.flipped .front {
    transform: rotateY(180deg);
  }

  &.flipped .back {
    transform: rotateY(0);
  }

  @media screen and (min-width: 1200px) {
    width: 800px;
    height: 450px;
  }
`;

const CardContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: transform 0.2s linear;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  background-color: #f6f7fb;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &.front {
    transform: rotateY(0);
  }

  &.back {
    transform: rotateY(180deg);
  }
`;

export default Flashcard;
