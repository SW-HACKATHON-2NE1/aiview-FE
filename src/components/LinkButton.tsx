import { useRouter } from "next/router";

type LinkButtonProps<P> = P & {
  href: string;
  Component?: React.ComponentType<P> | React.ElementType<P>;
};
function LinkButton({
  href,
  onClick,
  Component = "button",
  ...props
}: LinkButtonProps<React.HTMLAttributes<HTMLButtonElement>>) {
  const router = useRouter();

  const handleClick: typeof onClick = (ev) => {
    if (onClick) onClick(ev);
    router.push(href);
  };

  return <Component onClick={handleClick} {...props} />;
}

export default LinkButton;
