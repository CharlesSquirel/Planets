import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { StyledHamburgerIcon, StyledNav, StyledNavDesktop, StyledNavMobile, Title, StyledLink, StyledMobileLinks, StyledDesktopLinks } from "./StyledNav";
import { useRef } from "react";

function Nav() {
  const navMobile = useRef();
  const handleToogleNav = (e) => {
    if (e.target.classList.value.includes("close")) {
      navMobile.current.style.left = "-3000px";
    }
    if (e.target.classList.value.includes("open")) {
      navMobile.current.style.left = "0";
    }
  };
  return (
    <>
      <StyledNav>
        <Title>THE PLANETS</Title>
        <StyledNavDesktop>
          <StyledDesktopLinks>
            <StyledLink>
              <NavLink to="/">Mercury</NavLink>
            </StyledLink>
            <StyledLink>
              <NavLink to="/venus/overview">Venus</NavLink>
            </StyledLink>
            <StyledLink>
              <NavLink to="/earth/overview">Earth</NavLink>
            </StyledLink>
            <StyledLink>
              <NavLink to="/mars/overview">Mars</NavLink>
            </StyledLink>
            <StyledLink>
              <NavLink to="/jupiter/overview">Jupiter</NavLink>
            </StyledLink>
            <StyledLink>
              <NavLink to="/saturn/overview">Saturn</NavLink>
            </StyledLink>
            <StyledLink>
              <NavLink to="/uranus/overview">Uranus</NavLink>
            </StyledLink>
            <StyledLink>
              <NavLink to="/neptune/overview">Neptune</NavLink>
            </StyledLink>
          </StyledDesktopLinks>
        </StyledNavDesktop>
        <StyledNavMobile ref={navMobile}>
          <StyledMobileLinks>
            <li>Mercury</li>
            <li>Venus</li>
            <li>Earth</li>
            <li>Mars</li>
            <li>Jupiter</li>
            <li>Saturn</li>
            <li>Uranus</li>
            <li>Neptune</li>
          </StyledMobileLinks>
          <div className="close" onClick={handleToogleNav}>
            <i className="fa-solid fa-xmark close"></i>
          </div>
        </StyledNavMobile>
        <StyledHamburgerIcon className="hamburger" onClick={handleToogleNav}>
          <i className="fa-solid fa-bars open"></i>
        </StyledHamburgerIcon>
      </StyledNav>
      <Outlet />
    </>
  );
}

export default Nav;
