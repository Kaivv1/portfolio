import { clsx } from "clsx";
import React, { FC, ReactNode } from "react";

type HeadingProps = {
  variant: "h1" | "h2" | "h3";
  children: ReactNode;
  className?: string;
  color?: "primary" | "muted";
};

const Heading: FC<HeadingProps> = ({
  variant,
  className,
  children,
  color,
  ...props
}) => {
  let defaultClassName: string = `text-${color ? color : "white"} `;
  if (variant === "h1") defaultClassName += "h1";
  if (variant === "h2") defaultClassName += "h2";
  if (variant === "h3") defaultClassName += "h3";
  const Component = variant;

  return (
    <Component className={clsx(className, defaultClassName)} {...props}>
      {children}
    </Component>
  );
};

export default Heading;
