import styled from "styled-components";

export const StyledNav = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 85px;
  padding: 22px 40px 27px 32px;
  border-bottom: 1px solid ${({ theme }) => theme.color.darkGray};
  .title {
    font-family: "Antonio", sans-serif;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -1.05px;
    @media (min-width: ${({ theme }) => theme.break.minDesktop}) {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }
  .nav-links {
    display: flex;
    text-transform: uppercase;
    & li {
      line-height: 25px;
      letter-spacing: 1px;
      opacity: 0.75;
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      font-size: ${({ theme }) => theme.fontSize.m};
    }
  }
`;

export const StyledNavDesktop = styled.nav`
  @media (max-width: ${({ theme }) => theme.break.maxMobile}) {
    display: none;
  }
  .nav-desktop-links {
    gap: 33px;
    & li {
      @media (min-width: ${({ theme }) => theme.break.minDesktop}) {
        font-size: 18px;
      }
    }
  }
`;

export const StyledNavMobile = styled.nav`
  transition: all 0.5s ease-out;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  .nav-mobile-links {
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.black};
  }
  .close {
    position: absolute;
    right: 15px;
    top: 6px;
    font-size: 18px;
    cursor: pointer;
    color: ${({ theme }) => theme.color.black};
  }
`;

export const StyledHamburgerIcon = styled.div`
  cursor: pointer;
  font-size: 34px;
  @media (min-width: ${({ theme }) => theme.break.maxMobile}) {
    display: none;
  }
`;
