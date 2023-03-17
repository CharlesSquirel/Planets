import { GlobalStyle } from "./components/GlobalStyle/GlobalStyle";
import Nav from "./components/Nav.js/Nav";
import Overview from "./components/Overview.js/Overview";
import planets from "./data.json";
import merkury from "./assets/planet-mercury.svg";
import venus from "./assets/planet-venus.svg";
import earth from "./assets/planet-earth.svg";
import mars from "./assets/planet-mars.svg";
import jupiter from "./assets/planet-jupiter.svg";
import saturn from "./assets/planet-saturn.svg";
import uranus from "./assets/planet-uranus.svg";
import neptune from "./assets/planet-neptune.svg";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/GlobalStyle/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Root() {
  // const getPlanet = (planetName) => {
  //   const planet = planets.filter((planet) => planet.name === planetName);
  //   return planet;
  // };
  // console.log(planets.filter((planet) => planet.name === "Mercury"));

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Nav />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Overview planet={planets[0]} img={merkury} size={planets[0].overview.size} />} />
            <Route path="/venus" element={<Overview planet={planets[1]} img={venus} size={planets[1].overview.size} />} />
            <Route path="/earth" element={<Overview planet={planets[2]} img={earth} size={planets[2].overview.size} />} />
            <Route path="/mars" element={<Overview planet={planets[3]} img={mars} size={planets[3].overview.size} />} />
            <Route path="/jupiter" element={<Overview planet={planets[4]} img={jupiter} size={planets[4].overview.size} />} />
            <Route path="/saturn" element={<Overview planet={planets[5]} img={saturn} size={planets[5].overview.size} />} />
            <Route path="/uranus" element={<Overview planet={planets[6]} img={uranus} size={planets[6].overview.size} />} />
            <Route path="/neptune" element={<Overview planet={planets[7]} img={neptune} size={planets[7].overview.size} />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default Root;
