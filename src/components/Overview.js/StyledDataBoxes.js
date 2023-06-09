import styled from "styled-components";

export const StyledDataBoxes = styled.section`
  display: flex;
  gap: 30px;
  align-self: center;
`;

export const StyledDataBox = styled.div`
  width: 255px;
  height: 128px;
  padding: 20px 60px 27px 23px;
  border: 1px solid var(--lightGray);
`;

export const Title = styled.p`
  font-weight: var(--bold);
  font-size: 15px;
  line-height: 25px;
  letter-spacing: 1px;
  opacity: 0.5;
`;

export const Data = styled.h3`
  font-family: "Antonio", sans-serif;
  font-size: var(--xl);
  line-height: 52px;
  letter-spacing: -1.5px;
`;
