import type { RadioButtonGroupProps } from "./RadioButtonGroup";
import S from "./List.styled";

interface ListProps extends Omit<RadioButtonGroupProps, "children"> {
  items: string[];
  defaultIcon?: JSX.Element | undefined;
}
function List({ items, defaultIcon, style, ...props }: ListProps) {
  return (
    <S.StyledRadioButtonGroup
      style={{ overflow: "scroll", ...style }}
      {...props}
    >
      {items.map((item) => (
        <S.StyledRadioButton key={item} name={item} defaultIcon={defaultIcon} />
      ))}
    </S.StyledRadioButtonGroup>
  );
}

export default List;
