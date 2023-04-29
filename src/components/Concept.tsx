import React from "react";
import styled from "styled-components";
import CreateSvg from "../assets/create.svg";
import StudySvg from "../assets/study.svg";
import AchieveSvg from "../assets/achieve.svg";

const Concept = () => {
  return (
    <Wrapper>
      <h2>How It Works</h2>
      <Steps>
        <Step>
          <img src={CreateSvg} alt="Create flashcards" />
          <h3>Create Flashcards</h3>
          <p>Build your personalized flashcard sets with ease.</p>
        </Step>
        <Step>
          <img src={StudySvg} alt="Study" />
          <h3>Study</h3>
          <p>Learn at your own pace and track your progress.</p>
        </Step>
        <Step>
          <img src={AchieveSvg} alt="Achieve goals" />
          <h3>Achieve Goals</h3>
          <p>Master languages and reach your learning objectives.</p>
        </Step>
      </Steps>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2rem;
  text-align: center;

  h2 {
    font-size: 2rem;
    color: var(--color-primary);
    margin-bottom: 1.5rem;
  }
`;

const Steps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Step = styled.div`
  background-color: var(--off-white);
  border-radius: 4px;
  padding: 1.5rem;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

  img {
    width: 120px;
    height: auto;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    color: var(--color-primary);
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: var(--main-grey);
  }
`;

export default Concept;
