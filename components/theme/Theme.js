import { useState, useEffect } from "react";

import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";

import GlobalStyles from "./global";
import breakpoints from "./breakpoints";
import theme from "./config";

export default function Theme({ children }) {
  const [isMounted, setIsMounted] = useState(true);

  // Mount the component after Styled Components Loads
  useEffect(() => setIsMounted(true), []);

  return (
    <>
      {isMounted && (
        <ThemeProvider theme={{ ...theme, breakpoints }}>
          <Normalize />
          <GlobalStyles />
          {isMounted && children}
        </ThemeProvider>
      )}
    </>
  );
}
