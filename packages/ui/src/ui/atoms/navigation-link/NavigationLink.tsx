import { ButtonHTMLAttributes } from "react";
import { tcm } from "../../../libs/tailwind-class-merge";

interface NavigationLinkProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href: string;
  children: React.ReactNode;
  buttonClassName?: string;
  spanClassName?: string;
  active?: boolean;
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  href,
  children,
  buttonClassName,
  spanClassName,
  disabled,
  active = false,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={disabled || active}
      className={tcm(
        "btn group flex items-center bg-transparent tracking-widest font-medium justify-start",
        buttonClassName
      )}>
      <span
        className={tcm(
          `relative pb-1 text-slate-700 after:transition-transform after:duration-700 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right ${active ? "after:scale-x-100 font-bold" : "after:scale-x-0"} after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100 leading-6 pr-0 after:bg-slate-700/70`,
          spanClassName
        )}>
        <a
          href={active ? undefined : href}
          onClick={active ? (e) => e.preventDefault() : undefined}
          className={`text-slate-700/80 hover:text-slate-700 ${active ? "font-bold text-slate-700 cursor-default pointer-events-none" : ""}`}>
          {children}
        </a>
      </span>
    </button>
  );
};
