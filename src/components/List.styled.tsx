import RadioButtonGroup from "./RadioButtonGroup";
import styled from "@emotion/styled";

const StyledRadioButtonGroup = styled(RadioButtonGroup)(({ theme }) => ({
  "&::-webkit-scrollbar": {
    width: "28px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.color.G200,
    borderRadius: "20px",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: theme.color.G050,
    borderRadius: "20px",
  },
}));

const StyledRadioButton = styled(RadioButtonGroup.Button)({
  border: "none",
  width: "335px",
  height: "78px",
});

export default { StyledRadioButtonGroup, StyledRadioButton };
