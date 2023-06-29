import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { theme } from "@/core/theme";
import Header from "@/components/Header";

import "@public/global.css";
import { SWRConfig } from "swr";
require("src/core/registerChartjs");

function getLayout(component: JSX.Element) {
  return (
    <>
      <Header />
      {component}
    </>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <SWRConfig
        value={{
          fetcher: ([url, token]) =>
            fetch(url, {
              headers: {
                Authorization: token,
              },
            })
              .then((res) => res.json())
              .catch((E) => E),
        }}
      >
        {getLayout(<Component {...pageProps} />)}
      </SWRConfig>
    </ThemeProvider>
  );
}
