import React, { useState } from "react";
import styled from "@emotion/styled";

const TabButton = styled("button")<{ isSelected: boolean }>(
  ({ isSelected, theme }) => ({
    padding: "12px 32px",
    borderRadius: "10px",
    backgroundColor: isSelected ? theme.color.G900 : theme.color.G100,
    color: isSelected ? theme.color.G100 : theme.color.G450,
    border: "none",
  })
);

const TabContainer = styled("div")({
  display: "flex",
  gap: "8px",
});
export interface GridSelectionProps<T = string>
  extends React.HTMLAttributes<HTMLDivElement> {
  items: T[];
  onTabChanged?: (value: T) => void;
}
function Tabs({
  items,
  onTabChanged,
  children,
  ...props
}: React.PropsWithChildren<GridSelectionProps>) {
  const [currentItem, setCurrentItem] = useState<ValueOf<typeof items>>(
    items[0]
  );

  return (
    <TabContainer {...props}>
      {items.map((item) => (
        <TabButton
          key={item}
          isSelected={item == currentItem}
          onClick={() => {
            if (onTabChanged) onTabChanged(item);
            setCurrentItem(item);
          }}
        >
          {item}
        </TabButton>
      ))}
    </TabContainer>
  );
}

export default Tabs;
