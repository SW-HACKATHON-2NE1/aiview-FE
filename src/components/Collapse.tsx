import React, {
  HTMLAttributes,
  createContext,
  useContext,
  useState,
} from "react";
import styled from "@emotion/styled";
import ArrowDownIcon from "@public/icons/arrow_down.svg"; //눈물나는 결합

interface CollapseContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const CollapseContext = createContext<CollapseContextType>({
  isOpen: false,
  setIsOpen: () => {
    throw new Error("unsubscribed context!");
  },
});

function CollapseBar({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div {...props}>
      <CollapseContext.Provider value={{ isOpen, setIsOpen }}>
        {children}
      </CollapseContext.Provider>
    </div>
  );
}

const StyledButton = styled("button")<{ isOpen: boolean }>(({ isOpen }) => ({
  transition: "all 300ms",
  transform: `rotate(${isOpen ? 0 : 180}deg)`,
  backgroundColor: "white",
  border: "none",
  borderRadius: "50%",
}));

CollapseBar.Button = function ({
  onClick,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) {
  const { isOpen, setIsOpen } = useContext(CollapseContext);

  const handleClick: typeof onClick = (ev) => {
    setIsOpen((prev) => !prev);
    if (onClick) onClick(ev);
  };

  return (
    <StyledButton isOpen={isOpen} onClick={handleClick} {...props}>
      <ArrowDownIcon />
    </StyledButton>
  );
};

const StyledCollapseBody = styled("div")<{ isOpen: boolean }>(({ isOpen }) => ({
  height: isOpen ? "auto" : 0,
}));

CollapseBar.Body = function ({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { isOpen } = useContext(CollapseContext);

  return <>{isOpen && <StyledCollapseBody isOpen={isOpen} {...props} />}</>;
};

export default CollapseBar;
