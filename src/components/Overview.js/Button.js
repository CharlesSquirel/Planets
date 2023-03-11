import React from "react";
import { StyledButton } from "./StyledButton";

const Button = ({ number, text, isActive }) => {
  return (
    <StyledButton isActive={isActive}>
      <p className="btn-number">{number}</p>
      <h3>{text}</h3>
    </StyledButton>
  );
};

export default Button;
