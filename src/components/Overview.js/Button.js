import React from "react";
import { StyledButton } from "./StyledButton";
import { useNavigate } from "react-router";

const Button = ({ number, text, isActive, planetColor, navigate }) => {
  const nav = useNavigate();
  return (
    <StyledButton isActive={isActive} planetColor={planetColor} onClick={() => nav(navigate)}>
      <p className="btn-number">{number}</p>
      <h3>{text}</h3>
    </StyledButton>
  );
};

export default Button;
