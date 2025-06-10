import { tcm } from "@dlvlabs/ui";
import * as React from "react";

interface CardButtonBaseProps<Component extends React.ElementType> {
  component?: Component;
}
type CardButtonProps<Component extends React.ElementType> =
  CardButtonBaseProps<Component> & React.ComponentPropsWithoutRef<Component>;

export const CardButton = <Component extends React.ElementType>({
  className,
  component,
  ...props
}: CardButtonProps<Component>) => {
  return React.createElement(component ?? "button", {
    className: tcm(
      "relative w-full min-h-16 h-20 box-border border border-white shadow-[0.75rem_1rem_3.188rem_rgba(0,0,0,0.20)] backdrop-blur-[0.375rem] rounded-lg text-center cursor-pointer transition-all duration-500 flex items-center justify-center select-none font-bold text-black hover:border-[0.2px] hover:border-[rgba(0,0,0,0.40)] hover:scale-105 active:scale-95 active:rotate-[1.7deg]",
      className
    ),
    ...props,
  });
};
