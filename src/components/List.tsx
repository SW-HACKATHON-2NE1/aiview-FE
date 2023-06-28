import RadioButtonGroup, {
  type RadioButtonGroupProps,
} from "./RadioButtonGroup";
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

interface ListProps extends Omit<RadioButtonGroupProps, "children"> {
  items: string[];
  defaultIcon?: JSX.Element | undefined;
}
function List({ items, defaultIcon, style, ...props }: ListProps) {
  return (
    <StyledRadioButtonGroup style={{ overflow: "scroll", ...style }} {...props}>
      {items.map((item) => (
        <StyledRadioButton key={item} name={item} defaultIcon={defaultIcon} />
      ))}
    </StyledRadioButtonGroup>
  );
}

export default List;
