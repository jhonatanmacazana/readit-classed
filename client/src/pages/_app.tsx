import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import theme from "#root/config/theme";
import Navbar from "#root/components/Navbar";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.solitude};
    font-family: "IBM Plex Sans", sans-serif;
  }
`;

const App = ({ Component, pageProps }: AppProps) => {
  const { pathname } = useRouter();
  const authRoutes = ["/register", "/login"];
  const authRoute = authRoutes.includes(pathname);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {!authRoute && <Navbar />}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
