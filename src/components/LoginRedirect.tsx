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
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  .button-container {
    display: flex;
    gap: 10px;

    button {
      background-color: var(--color-primary);
      color: var(--off-white);
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      font-size: 18px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: var(--color-secondary);
      }
    }
  }
`;

export default LoginRedirect;
