import type { RadioButtonGroupProps } from "./RadioButtonGroup";
import S from "./List.styled";

interface ListProps extends Omit<RadioButtonGroupProps, "children"> {
  items: readonly string[];
  defaultIcon?: JSX.Element | undefined;
}
function List({ items, defaultIcon, ...props }: ListProps) {
  return (
    <S.StyledRadioButtonGroup {...props}>
      {items.map((item) => (
        <S.StyledRadioButton key={item} name={item} defaultIcon={defaultIcon} />
      ))}
    </S.StyledRadioButtonGroup>
  );
}

export default List;
