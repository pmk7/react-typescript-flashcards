import React, { FC } from "react";
import styled from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
};

const Wrapper = styled.button`
  font-size: 0.8rem;
  padding: 0.25rem 0.75rem;
  background-color: var(--color-primary);
  color: #fff;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: var(--color-secondary);

  }
}

@media screen and (min-width: 768px) {
  .nav-btn {
    font-size: 1rem;
    padding: 0.5rem 1.5rem;
    border-radius: 4px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 1.2rem;
  }
`;

export default Button;
