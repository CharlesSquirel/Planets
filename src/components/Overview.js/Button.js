import React from "react";
import { StyledButton } from "./StyledButton";

const Button = ({ number, text, isActive, planetColor }) => {
  return (
    <StyledButton isActive={isActive} planetColor={planetColor}>
      <p className="btn-number">{number}</p>
      <h3>{text}</h3>
    </StyledButton>
  );
};

export default Button;
