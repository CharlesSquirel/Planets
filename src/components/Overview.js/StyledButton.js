import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 25px;
  width: 350px;
  height: 48px;
  padding: 12px 84px 11px 28px;
  line-height: 25px;
  letter-spacing: 2.57143px;
  text-transform: uppercase;
  border: 1px solid var(--darkGray);
  color: var(--white);
  font-weight: var(--bold);
  font-size: var(--m);
  background-color: ${(props) => (props.isActive ? `var(--lightBlue)` : "transparent")};
  .btn-number {
    opacity: 0.5;
  }
`;
