export const theme = {
  color: {
    G000: "#ffffff",
    G050: "#f2f2f2",
    G100: "#e5e5e5",
    G200: "#cccccc",
    G300: "#b3b3b3",
    G450: "#999999",
    G500: "#808080",
    G600: "#666666",
    G700: "#4c4c4c",
    G800: "#333333",
    G900: "#1a1a1a",
    blue: "#497af8",
    blue95: "#f6f8ff",
    red: "#FF3434",
  },
} as const;

type ThemeType = typeof theme;
declare module "@emotion/react" {
  interface Theme extends ThemeType {}
}
