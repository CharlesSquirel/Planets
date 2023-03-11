import { StyledNav } from "./StyledNav";

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
    <StyledNav>
      <h1 className="title">THE PLANETS</h1>
      <nav className="nav-desktop">
        <ul className="nav-desktop-links nav-links">
          <li>Mercury</li>
          <li>Venus</li>
          <li>Earth</li>
          <li>Mars</li>
          <li>Jupiter</li>
          <li>Saturn</li>
          <li>Uranus</li>
          <li>Neptune</li>
        </ul>
      </nav>
      <nav className="nav-mobile">
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
      </nav>
      <div className="hamburger" onClick={handleToogleNav}>
        <i className="fa-solid fa-bars open"></i>
      </div>
    </StyledNav>
  );
}

export default Nav;
