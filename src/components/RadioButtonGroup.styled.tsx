import styled from "@emotion/styled";
import Button from "./Button";

const RadioButton = styled(Button)(({ theme }) => ({
  borderRadius: "4px",
  border: `1px solid ${theme.color.G100}`,
  backgroundColor: "white",
  width: "335px",
  height: "78px",
  fontSize: "24px",
  color: theme.color.G700,
  textAlign: "left",
  display: "flex",
  justifyContent: "space-between",
}));

const SelectedRadioButton = styled(RadioButton)(({ theme }) => ({
  border: `1px solid ${theme.color.blue}`,
  background: theme.color.blue95,
}));

export default { RadioButton, SelectedRadioButton };
