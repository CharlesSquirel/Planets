import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 25px;
  position: relative;
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
  background-color: ${(props) =>
    (props.isActive && props.planetColor === "mercury" && `var(--lightBlue)`) ||
    (props.isActive && props.planetColor === "venus" && "var(--yellow)") ||
    (props.isActive && props.planetColor === "earth" && "var(--violet)") ||
    (props.isActive && props.planetColor === "mars" && "var(--lightRed)") ||
    (props.isActive && props.planetColor === "jupiter" && "var(--darkRed)") ||
    (props.isActive && props.planetColor === "saturn" && "var(--orange)") ||
    (props.isActive && props.planetColor === "uranus" && "var(--turquse)") ||
    (props.isActive && props.planetColor === "neptune" && "var(--darkBlue)") ||
    "transparent"};
  pointer-events: ${({ isActive }) => (isActive && "none") || "auto"};
  &:hover {
    background-color: var(--btn-hover);
  }
  .btn-number {
    opacity: 0.5;
  }
`;
