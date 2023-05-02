import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface LinkButtonProps {
  children: React.ReactNode;
  to: string;
  className?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ children, to, className }) => {
  return (
    <StyledLinkButton to={to} className={className}>
      {children}
    </StyledLinkButton>
  );
};

const StyledLinkButton = styled(Link)`
  color: var(--color-primary);
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0.5rem 1.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--off-white);
  border: 1px solid var(--color-primary);
  border-radius: 5px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;

  &:hover,
  &:focus {
    background-color: var(--color-primary);
    color: var(--off-white);
    text-decoration: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

export default LinkButton;
