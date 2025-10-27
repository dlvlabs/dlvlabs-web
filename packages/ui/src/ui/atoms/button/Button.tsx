import * as React from "react";
import { tcm } from "../../../libs";
interface ButtonBaseProps<Component extends React.ElementType> {
  component?: Component;
  isNonStylable?: boolean;
}

export type ButtonProps<Component extends React.ElementType> =
  ButtonBaseProps<Component> &
    Omit<
      React.ComponentPropsWithoutRef<Component>,
      keyof ButtonBaseProps<Component>
    >;

export const Button = <Component extends React.ElementType = "button">({
  component,
  className,
  disabled,
  children,
  isNonStylable,
  ...props
}: ButtonProps<Component>) => {
  const baseStyle =
    "font-medium transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed";

  return React.createElement(
    component ?? "button",
    {
      className: tcm(isNonStylable ? "" : baseStyle, className),
      disabled: disabled,
      ...props,
    },
    <>{children}</>
  );
};
