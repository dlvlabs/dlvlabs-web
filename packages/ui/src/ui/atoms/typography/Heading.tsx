import { HtmlHTMLAttributes } from "react";

export const H1: React.FC<HtmlHTMLAttributes<HTMLHeadingElement>> = ({
  children,
  ...props
}) => {
  return (
    <h1
      className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl"
      {...props}>
      {children}
    </h1>
  );
};
