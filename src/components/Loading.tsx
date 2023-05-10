import React from "react";
import styled from "styled-components";

const Loading: React.FC = () => {
  return (
    <Wrapper>
      <div className="loading-container">
        <div className="loading"></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .loading {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    border: 0.5rem solid transparent;
    border-top-color: blue;
    animation: spinner 0.6s linear infinite;
  }

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Loading;
