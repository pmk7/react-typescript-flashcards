import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const LoginRedirect: React.FC = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Wrapper>
      <h2>Please log in or sign up to continue</h2>
      <div className="button-container">
        <button onClick={() => loginWithRedirect()}>Log In</button>
        <button onClick={() => loginWithRedirect()}>Sign Up</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ;
  width: 100%;
  height: 100vh;
  background-color: var(--main-white);

  h2 {
    font-size: 1.5rem;
    margin: 1rem;
  }

  .button-container {
    display: flex;
    gap: 0.625rem;

    button {
      background-color: var(--color-primary);
      color: #ffffff;
      padding: 0.625rem 1.25rem;
      border: none;
      border-radius: 0.25rem;
      font-size: 1.125rem;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: var(--color-secondary);
      }
    }
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 1.75rem;
      margin-bottom: 1.5rem;
    }

    .button-container {
      gap: 0.75rem;

      button {
        padding: 0.75rem 1.5rem;
        font-size: 1.25rem;
      }
    }
  }
`;

export default LoginRedirect;
