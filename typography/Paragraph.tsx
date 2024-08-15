import clsx from "clsx";
import React, { ComponentPropsWithoutRef, FC } from "react";

type ParagraphProps = ComponentPropsWithoutRef<"p"> & {
  color?: "primary" | "muted";
  className?: string;
  variant?: "sm" | "lg" | "xs";
};

const Paragraph: FC<ParagraphProps> = ({
  variant,
  color,
  className,
  ...props
}) => {
  let defaultClassName: string = `text-${color ? color : "white"} text-${
    variant ? variant : "base"
  } text-pretty `;
  if (variant === "sm") defaultClassName += "font-semibold";
  if (variant === "xs") defaultClassName += "font-extrabold";

  return <p className={clsx(defaultClassName, className)} {...props} />;
};

export default Paragraph;
