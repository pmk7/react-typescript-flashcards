import React from "react";
import styled from "styled-components";
import { steps } from "../utils/constants";

interface StepType {
  id: number;
  title: string;
  text: string;
  image: string;
}

const Concept = () => {
  return (
    <Wrapper>
      <h2>How It Works</h2>
      <Steps>
        {steps.map((step: StepType) => {
          const { id, title, text, image } = step;
          return (
            <Step key={id}>
              <img src={image} alt={title} />
              <h3>{title}</h3>
              <p>{text}</p>
            </Step>
          );
        })}
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
  box-shadow: var(--light-shadow);

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
