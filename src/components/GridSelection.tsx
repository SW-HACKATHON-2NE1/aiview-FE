import RadioButtonGroup, {
  type RadioButtonGroupProps,
} from "./RadioButtonGroup";
import styled from "@emotion/styled";
import OutlineCheckIcon from "@public/icons/check_outline.svg";

const StyledCheckIcon = styled(OutlineCheckIcon)(({ theme }) => ({
  stroke: theme.color.blue,
}));

interface GridSelectionProps extends Omit<RadioButtonGroupProps, "children"> {
  items: string[];
}
function GridSelection({ items, style, ...props }: GridSelectionProps) {
  return (
    <RadioButtonGroup
      style={{
        display: "grid",
        ...style,
      }}
      {...props}
    >
      {items.map((item) => (
        <RadioButtonGroup.Button
          key={item}
          name={item}
          selectedIcon={<StyledCheckIcon />}
        />
      ))}
    </RadioButtonGroup>
  );
}

export default GridSelection;
