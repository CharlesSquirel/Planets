import { createGlobalStyle } from "styled-components";
import bgStars from "../../assets/background-stars.svg";

// font-family: 'Antonio', sans-serif;
// font-family: 'League Spartan', sans-serif;

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    caret-color: transparent;
}

body {
    font-family: 'League Spartan', sans-serif;
    font-size: ${({ theme }) => theme.fontSize.lg};
    background-color: ${({ theme }) => theme.color.bg};
    background-image: url(${bgStars});
    color: ${({ theme }) => theme.color.white};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
}

a {
    text-decoration: none;
    color: inherit;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

button {
    font-family: inherit;
    
}

ul {
    list-style-type: none;
}
`;
