import styled from "@emotion/styled";
import Button from "./Button";

const RadioButton = styled(Button)<{ isSelected: boolean }>(
  ({ theme, isSelected }) => ({
    borderRadius: "4px",
    border: `1px solid ${isSelected ? theme.color.blue : theme.color.G100}`,
    backgroundColor: isSelected ? theme.color.blue95 : "white",
    transition: "all 300ms",
    width: "335px",
    height: "78px",
    fontSize: "24px",
    color: theme.color.G700,
    textAlign: "left",
    display: "flex",
    justifyContent: "space-between",
  })
);

export default { RadioButton };
