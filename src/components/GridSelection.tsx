import RadioButtonGroup from "./RadioButtonGroup";
import styled from "@emotion/styled";
import OutlineCheckIcon from "@public/icons/check_outline.svg";

const StyledCheckIcon = styled(OutlineCheckIcon)(({ theme }) => ({
  stroke: theme.color.blue,
}));

interface GridSelectionProps extends React.HTMLAttributes<HTMLDivElement> {
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
          name={item}
          selectedIcon={<StyledCheckIcon />}
        />
      ))}
    </RadioButtonGroup>
  );
}

export default GridSelection;
