import { createGlobalStyle } from "styled-components";

import "@fontsource/roboto/index.css";
import "@fontsource/roboto/900.css";
import "@fontsource/comfortaa/index.css";

export default createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    background: #151515
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Comfortaa", sans-serif;;
  }
`;
