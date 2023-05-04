import React from "react";
import styled from "styled-components";
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";
import font from "../assets/font.svg";

interface FontControlProps {
  increaseFont: () => void;
  decreaseFont: () => void;
}

const FontControl: React.FC<FontControlProps> = ({
  increaseFont,
  decreaseFont,
}) => {
  return (
    <ControlWrapper>
      <img src={font} alt="font logo" />
      <div>
        <button onClick={decreaseFont}>
          <img src={minus} alt="decrease font" />
        </button>
        <button onClick={increaseFont}>
          <img src={plus} alt="increase font" />
        </button>
      </div>
    </ControlWrapper>
  );
};

const ControlWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 1rem;

  img {
    width: 1rem;
    height: 1rem;
  }

  div {
    display: flex;
    gap: 0.5rem;
  }

  button {
    background-color: transparent;
    border: none;
    padding: 0.3rem;
    cursor: pointer;
  }
`;

export default FontControl;
