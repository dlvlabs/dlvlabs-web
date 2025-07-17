"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ButtonHTMLAttributes } from "react";
import { tcm } from "../../../libs/tailwind-class-merge";

interface NavigationLinkProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href: string;
  children: React.ReactNode;
  buttonClassName?: string;
  spanClassName?: string;
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  href,
  children,
  buttonClassName,
  spanClassName,
  disabled,
  ...props
}) => {
  console.log("🚀 ~ href:", href);
  const pathname = usePathname();
  console.log(pathname.startsWith("/chains"));
  return (
    <button
      {...props}
      disabled={disabled}
      className={tcm(
        "btn group flex items-center bg-transparent tracking-widest font-medium justify-start",
        buttonClassName
      )}>
      <span
        className={tcm(
          `relative pb-1 text-white after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100 leading-6 pr-0 after:bg-slate-500`,
          spanClassName
        )}>
        <Link href={href} className={`text-slate-500 hover:text-slate-700 `}>
          {children}
        </Link>
      </span>
    </button>
  );
};
