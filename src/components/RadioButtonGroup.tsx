import React, { useContext, createContext, useState } from "react";
import styled from "@emotion/styled";
import Button from "./Button";

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

const RadioButton = styled(Button)(({ theme }) => ({
  borderRadius: "4px",
  border: `1px solid ${theme.color.G100}`,
  backgroundColor: "white",
  width: "335px",
  height: "78px",
  fontSize: "24px",
  color: theme.color.G700,
  textAlign: "left",
}));

const SelectedRadioButton = styled(RadioButton)(({ theme }) => ({
  border: `1px solid ${theme.color.blue}`,
  background: theme.color.blue95,
  display: "flex",
  justifyContent: "space-between",
  "& svg": {},
}));

interface RadioButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  name: string;
  selectedIcon?: JSX.Element | undefined;
}
RadioButtonGroup.Button = function ({
  name,
  onClick,
  selectedIcon,
  ...props
}: RadioButtonProps) {
  const { selectedValue, clicked } = useContext(RadioButtonGroupContext);
  const isSelected = selectedValue == name;
  const handleClick: typeof onClick = (ev) => {
    clicked(name);
    if (onClick) onClick(ev);
  };

  return isSelected ? (
    <SelectedRadioButton onClick={handleClick} {...props}>
      <span>{name}</span>
      {selectedIcon}
    </SelectedRadioButton>
  ) : (
    <RadioButton onClick={handleClick} {...props}>
      {name}
    </RadioButton>
  );
};

export default RadioButtonGroup;
