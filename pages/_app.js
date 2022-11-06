import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles, { theme } from "../src/theme/theme";
import { SessionProvider } from "next-auth/react";
import Layout from "../src/components/Layout";
import SearchProvider from "../src/context/searchContext";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ThemeProvider theme={theme}>
      <SessionProvider session={pageProps.session}>
        <GlobalStyles />
        <SearchProvider>
          <Layout>
            <QueryClientProvider client={queryClient}>
              <Hydrate state={pageProps.dehydratedState}>
                <Component {...pageProps} />
              </Hydrate>
            </QueryClientProvider>
          </Layout>
        </SearchProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}

export default MyApp;
