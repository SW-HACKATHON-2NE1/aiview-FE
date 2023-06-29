import styled from "@emotion/styled";

const HeaderWrapper = styled("header")(({ theme }) => ({
  width: "100vw",
  height: "100px",
  backgroundColor: theme.color.G800,
}));

const HeaderContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "auto",
  padding: "30px 260px",
  color: "white",
  "& > span": { fontSize: "18px" },
});

const Logo = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "16px",
  "& > div": {
    padding: "10px 4px 8px 4px",
    backgroundColor: "white",
    borderRadius: "4px",
    color: "#d8d8d8",
    fontSize: "18px",
  },
  "& > span": {
    fontSize: "24px",
    fontWeight: 700,
  },
});

export default { HeaderWrapper, HeaderContainer, Logo };
