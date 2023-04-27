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
  background-color: var(--color-primary);
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  height: 2rem;
  list-style: none;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`;

export default Button;
