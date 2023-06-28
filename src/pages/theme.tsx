import { theme } from "@/core/theme";
import styled from "@emotion/styled";

type ValueOf<T> = T[keyof T];

const colors = Object.entries(theme.color) as [
  keyof typeof theme.color,
  ValueOf<typeof theme.color>
][];

const ColorBox = styled("div")<{ color: keyof (typeof theme)["color"] }>(
  ({ color, theme }) => ({
    backgroundColor: theme.color[color],
    width: "25px",
    height: "25px",
  })
);

export default function ThemePage() {
  return (
    <main>
      <h1>테마 모음 페이지</h1>
      <div
        style={{
          height: "3px",
          backgroundColor: "gray",
          width: "auto",
          margin: "0 10px",
        }}
      />
      <div style={{ display: "flex", gap: "10px", marginTop: "50px" }}>
        {colors.map(([colorName, hexcode], i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px black solid",
              padding: "5px",
            }}
          >
            {colorName}
            <ColorBox color={colorName} />
            {hexcode}
          </div>
        ))}
      </div>
    </main>
  );
}
