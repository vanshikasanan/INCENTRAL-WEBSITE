import { cn } from "cn";

type ContainerProps = React.ComponentProps<"div"> & {
  as?: "div" | "section" | "main" | "header" | "footer";
};

export function Container({
  as: Component = "div",
  className,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    />
  );
}
