import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { StyledHamburgerIcon, StyledNav, StyledNavDesktop, StyledNavMobile } from "./StyledNav";

function Nav() {
  const handleToogleNav = (e) => {
    const navMobile = document.querySelector(".nav-mobile");
    if (e.target.classList.value.includes("close")) {
      navMobile.style.left = "-3000px";
    }
    if (e.target.classList.value.includes("open")) {
      navMobile.style.left = "0";
    }
  };
  return (
    <>
      <StyledNav>
        <h1 className="title">THE PLANETS</h1>
        <StyledNavDesktop className="nav-desktop">
          <ul className="nav-desktop-links nav-links">
            <li>
              <NavLink to="/">Mercury</NavLink>
            </li>
            <li>
              <NavLink to="/venus/overview">Venus</NavLink>
            </li>
            <li>
              <NavLink to="/earth/overview">Earth</NavLink>
            </li>
            <li>
              <NavLink to="/mars/overview">Mars</NavLink>
            </li>
            <li>
              <NavLink to="/jupiter/overview">Jupiter</NavLink>
            </li>
            <li>
              <NavLink to="/saturn/overview">Saturn</NavLink>
            </li>
            <li>
              <NavLink to="/uranus/overview">Uranus</NavLink>
            </li>
            <li>
              <NavLink to="/neptune/overview">Neptune</NavLink>
            </li>
          </ul>
        </StyledNavDesktop>
        <StyledNavMobile className="nav-mobile">
          <ul className="nav-mobile-links nav-links">
            <li>Mercury</li>
            <li>Venus</li>
            <li>Earth</li>
            <li>Mars</li>
            <li>Jupiter</li>
            <li>Saturn</li>
            <li>Uranus</li>
            <li>Neptune</li>
          </ul>
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
