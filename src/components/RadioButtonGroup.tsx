import React, { useContext, createContext, useState } from "react";
import S from "./RadioButtonGroup.styled";

interface RadioButtonGroupContextType {
  clicked(name: string): void;
  selectedValue: string | null;
}

const RadioButtonGroupContext = createContext<RadioButtonGroupContextType>({
  clicked: () => {
    throw new Error("unsubscribed context!");
  },
  selectedValue: null,
});

export interface RadioButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: JSX.Element[];
  onSelectChanged?: (value: string) => void;
}
function RadioButtonGroup({
  children,
  onSelectChanged,
  ...props
}: RadioButtonGroupProps) {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const contextValue = {
    clicked(name: string) {
      setSelectedValue(name);
      if (onSelectChanged) onSelectChanged(name);
    },
    selectedValue,
  };
  return (
    <div {...props}>
      <RadioButtonGroupContext.Provider value={contextValue}>
        {children}
      </RadioButtonGroupContext.Provider>
    </div>
  );
}

interface RadioButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  name: string;
  selectedIcon?: JSX.Element | undefined;
  defaultIcon?: JSX.Element | undefined;
}
RadioButtonGroup.Button = function ({
  name,
  onClick,
  defaultIcon,
  selectedIcon = defaultIcon,
  ...props
}: RadioButtonProps) {
  const { selectedValue, clicked } = useContext(RadioButtonGroupContext);
  const isSelected = selectedValue == name;
  const handleClick: typeof onClick = (ev) => {
    clicked(name);
    if (onClick) onClick(ev);
  };

  return (
    <S.RadioButton onClick={handleClick} isSelected={isSelected} {...props}>
      <span>{name}</span>
      {isSelected ? selectedIcon : defaultIcon}
    </S.RadioButton>
  );
};

export default RadioButtonGroup;
