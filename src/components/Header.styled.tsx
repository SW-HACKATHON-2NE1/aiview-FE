import styled from "@emotion/styled";

const HeaderWrapper = styled("header")(({ theme }) => ({
  width: "100vw",
  height: "80px",
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

export default { HeaderWrapper, HeaderContainer };
