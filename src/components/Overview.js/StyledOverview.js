import styled from "styled-components";

// MAIN CONTAINER
export const StyledOverview = styled.main`
  display: flex;
  flex-direction: column;
  padding-bottom: 56px;
  @media (max-width: ${({ theme }) => theme.break.maxTablet}) {
    flex-direction: column;
    gap: 80px;
    padding: 146px 40px 36px 39px;
  }
`;

// PLANET IMG
export const StyledPlanetImg = styled.div`
  align-self: center;
`;

// PLANET TEXT
export const StyledPlanetText = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 350px;
  @media (max-width: ${({ theme }) => theme.break.maxTablet}) {
    flex-direction: row;
    justify-content: center;
    gap: 69px;
    width: 100%;
  }
  .planet-text-box {
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (max-width: ${({ theme }) => theme.break.maxTablet}) {
      width: 339px;
    }
  }
  .planet-title {
    font-family: "Antonio", sans-serif;
    line-height: 104px;
    text-transform: uppercase;
    font-size: var(--xxl);
    font-weight: var(--regular);
    @media (max-width: ${({ theme }) => theme.break.maxTablet}) {
      font-size: 48px;
      line-height: 62px;
    }
  }
  .planet-desc,
  .source-text {
    line-height: 25px;
    font-size: var(--lg);
  }
  .planet-desc {
    padding-right: 80px;
    @media (max-width: ${({ theme }) => theme.break.maxTablet}) {
      padding: 0;
    }
  }
`;

// PLANET TEXT WIKI SOURCE
export const StyledPlanetWiki = styled.div`
  display: flex;
  gap: 8px;
  opacity: 0.5;
  .wiki-text {
    text-decoration: underline;
    font-weight: var(--bold);
  }
  .source-icon {
    width: 12px;
    height: 12px;
  }
`;

// BUTTON BOX
export const StyledButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: ${({ theme }) => theme.break.maxTablet}) {
    align-self: center;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 85px 165px 87px 189px;
  @media (min-width: 1500px) {
    justify-content: center;
    gap: 300px;
    padding: 85px 0 87px 0;
  } ;
`;
