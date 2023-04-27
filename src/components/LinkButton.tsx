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
  padding: 1rem 0;
  display: block;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export default LinkButton;
