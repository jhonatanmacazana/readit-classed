import { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import "../styles/globals.css";

import theme from "../config/theme";

const GlobalStyle = createGlobalStyle`
  body {
    /* background-color: ${props => props.theme.jade}; */
    font-family: "IBM Plex Sans", sans-serif;
  }
`;

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
