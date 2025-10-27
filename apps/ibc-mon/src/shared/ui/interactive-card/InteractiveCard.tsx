import { tcm } from "@dlvlabs/ui";
import * as React from "react";

interface InteractiveCardBaseProps<Component extends React.ElementType> {
  component?: Component;
}
type InteractiveCardProps<Component extends React.ElementType> =
  InteractiveCardBaseProps<Component> &
    React.ComponentPropsWithoutRef<Component>;

export const InteractiveCard = <Component extends React.ElementType>({
  className,
  component,
  ...props
}: InteractiveCardProps<Component>) => {
  return React.createElement(component ?? "button", {
    className: tcm(
      "relative w-full min-h-16 h-20 box-border border border-white dark:border-slate-700/30 shadow-[0.75rem_1rem_3.188rem_rgba(0,0,0,0.20)] dark:shadow-[0.75rem_1rem_3.188rem_rgba(0,0,0,0.30)] backdrop-blur-[0.375rem] rounded-lg text-center cursor-pointer transition-all duration-500 flex items-center justify-center select-none font-bold text-black dark:text-slate-200 hover:border-[0.2px] hover:border-[rgba(0,0,0,0.40)] dark:hover:border-white/5 hover:scale-105 active:scale-95 active:rotate-[1.7deg]",
      className
    ),
    ...props,
  });
};
