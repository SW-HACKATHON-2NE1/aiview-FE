import { useRouter } from "next/router";
import React from "react";

interface LinkButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  href: string;
}
function LinkButton({ href, onClick, ...props }: LinkButtonProps) {
  const router = useRouter();

  const handleClick: typeof onClick = (ev) => {
    if (onClick) onClick(ev);
    router.push(href);
  };

  return <button onClick={handleClick} {...props} />;
}

export default LinkButton;
