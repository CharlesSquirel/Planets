import { GlobalStyle } from "./components/GlobalStyle/GlobalStyle";
import Nav from "./components/Nav.js/Nav";
import Overview from "./components/Overview.js/Overview";
import planets from "./data.json";
import merkury from "./assets/planet-mercury.svg";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/GlobalStyle/theme";

function Root() {
  const getPlanet = (name) => {
    const planet = planets.filter((planet) => planet.name === name);
    return planet;
  };
  console.log(planets);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Nav />
        <Overview planet={planets[0]} img={merkury} />
      </ThemeProvider>
    </>
  );
}

export default Root;
