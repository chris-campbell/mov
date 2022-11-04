import { ThemeProvider } from "styled-components";
import GlobalStyles, { theme } from "../src/theme/theme";
import { SessionProvider } from "next-auth/react";
import Layout from "../src/components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <SessionProvider session={pageProps.session}>
        <Layout>
          <GlobalStyles />
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </ThemeProvider>
  );
}

export default MyApp;
