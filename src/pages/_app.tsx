import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { theme } from "@/core/theme";

import "@public/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
