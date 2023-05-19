import React from "react";
import { useNavigate } from "react-router";
import { StyledButton, ButtonNumber } from "./StyledButton";

const Button = ({ number, text, isActive, planetColor, navigate }) => {
  const nav = useNavigate();
  return (
    <StyledButton isActive={isActive} planetColor={planetColor} onClick={() => nav(navigate)}>
      <ButtonNumber className="btn-number">{number}</ButtonNumber>
      <h3>{text}</h3>
    </StyledButton>
  );
};

export default Button;
