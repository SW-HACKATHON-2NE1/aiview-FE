import styled from "@emotion/styled";

const Button = styled("button")(({ theme }) => ({
  backgroundColor: theme.color.blue,
  border: "1px solid #000000",
  borderRadius: "10px",
  padding: "24px",
  fontSize: "28px",
  fontWeight: 700,
  color: "white",
  width: "400px",
  height: "82px",
}));

export default Button;
