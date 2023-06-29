import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { theme } from "@/core/theme";
import Header from "@/components/Header";

import "@public/global.css";

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
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}
