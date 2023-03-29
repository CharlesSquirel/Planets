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
import merkuryStr from "./assets/planet-mercury-internal.svg";
import venusStr from "./assets/planet-venus-internal.svg";
import earthStr from "./assets/planet-earth-internal.svg";
import marsStr from "./assets/planet-mars-internal.svg";
import jupiterStr from "./assets/planet-jupiter-internal.svg";
import saturnStr from "./assets/planet-saturn-internal.svg";
import uranusStr from "./assets/planet-uranus-internal.svg";
import neptuneStr from "./assets/planet-neptune-internal.svg";
import mercurySrf from "./assets/geology-mercury.png";
import venusSrf from "./assets/geology-venus.png";
import earthSrf from "./assets/geology-earth.png";
import marsSrf from "./assets/geology-mars.png";
import jupiterSrf from "./assets/geology-jupiter.png";
import saturnSrf from "./assets/geology-saturn.png";
import uranusSrf from "./assets/geology-uranus.png";
import neptuneSrf from "./assets/geology-neptune.png";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/GlobalStyle/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Structure from "./components/Structure/Structure";
import Surface from "./components/Surface/Surface";

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
            <Route path="/" element={<Overview planet={planets[0]} img={merkury} size={planets[0].overview.size} planetColor={"mercury"} />} />
            <Route path="/venus" element={<Overview planet={planets[1]} img={venus} size={planets[1].overview.size} planetColor={"venus"} />} />
            <Route path="/earth" element={<Overview planet={planets[2]} img={earth} size={planets[2].overview.size} planetColor={"earth"} />} />
            <Route path="/mars" element={<Overview planet={planets[3]} img={mars} size={planets[3].overview.size} planetColor={"mars"} />} />
            <Route path="/jupiter" element={<Overview planet={planets[4]} img={jupiter} size={planets[4].overview.size} planetColor={"jupiter"} />} />
            <Route path="/saturn" element={<Overview planet={planets[5]} img={saturn} size={planets[5].overview.size} planetColor={"saturn"} />} />
            <Route path="/uranus" element={<Overview planet={planets[6]} img={uranus} size={planets[6].overview.size} planetColor={"uranus"} />} />
            <Route path="/neptune" element={<Overview planet={planets[7]} img={neptune} size={planets[7].overview.size} planetColor={"neptune"} />} />
            <Route path="/mercurystr" element={<Structure planet={planets[0]} img={merkuryStr} size={planets[0].overview.size} planetColor={"mercury"} />} />
            <Route path="/venusstr" element={<Structure planet={planets[1]} img={venusStr} size={planets[1].overview.size} planetColor={"venus"} />} />
            <Route path="/earthstr" element={<Structure planet={planets[2]} img={earthStr} size={planets[2].overview.size} planetColor={"earth"} />} />
            <Route path="/marsstr" element={<Structure planet={planets[3]} img={marsStr} size={planets[3].overview.size} planetColor={"mars"} />} />
            <Route path="/jupiterstr" element={<Structure planet={planets[4]} img={jupiterStr} size={planets[4].overview.size} planetColor={"jupiter"} />} />
            <Route path="/saturnstr" element={<Structure planet={planets[5]} img={saturnStr} size={planets[5].overview.size} planetColor={"saturn"} />} />
            <Route path="/uranusstr" element={<Structure planet={planets[6]} img={uranusStr} size={planets[6].overview.size} planetColor={"uranus"} />} />
            <Route path="/neptunestr" element={<Structure planet={planets[7]} img={neptuneStr} size={planets[7].overview.size} planetColor={"neptune"} />} />
            <Route path="/mercurysurf" element={<Surface planet={planets[0]} img={merkury} size={planets[0].overview.size} imgSecondary={mercurySrf} position={"Mercury"} planetColor={"mercury"} />} />
            <Route path="/venussurf" element={<Surface planet={planets[1]} img={venus} size={planets[1].overview.size} imgSecondary={venusSrf} position={"Venus"} planetColor={"venus"} />} />
            <Route path="/earthsurf" element={<Surface planet={planets[2]} img={earth} size={planets[2].overview.size} imgSecondary={earthSrf} position={"Earth"} planetColor={"earth"} />} />
            <Route path="/marssurf" element={<Surface planet={planets[3]} img={mars} size={planets[3].overview.size} imgSecondary={marsSrf} position={"Mars"} />} planetColor={"mars"} />
            <Route path="/jupitersurf" element={<Surface planet={planets[4]} img={jupiter} size={planets[4].overview.size} imgSecondary={jupiterSrf} position={"Jupiter"} planetColor={"jupiter"} />} />
            <Route path="/saturnsurf" element={<Surface planet={planets[5]} img={saturn} size={planets[5].overview.size} imgSecondary={saturnSrf} position={"Saturn"} planetColor={"saturn"} />} />
            <Route path="/uranussurf" element={<Surface planet={planets[6]} img={uranus} size={planets[6].overview.size} imgSecondary={uranusSrf} position={"Uranus"} planetColor={"uranus"} />} />
            <Route path="/neptunesurf" element={<Surface planet={planets[7]} img={neptune} size={planets[7].overview.size} imgSecondary={neptuneSrf} position={"Neptune"} planetColor={"neptune"} />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default Root;
