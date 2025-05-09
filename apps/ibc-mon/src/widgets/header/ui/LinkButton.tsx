import { tcm } from "@dlvlabs/ui";
import Link from "next/link";

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  buttonClassName?: string;
  spanClassName?: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  children,
  buttonClassName,
  spanClassName,
}) => {
  return (
    <button
      className={tcm(
        "btn group flex items-center bg-transparent tracking-widest font-medium justify-start",
        buttonClassName,
      )}
    >
      <span
        className={tcm(
          `relative pb-1text-white after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100 leading-6 pr-0 after:bg-slate-500`,
          spanClassName,
        )}
      >
        <Link
          href={href}
          className={`text-slate-500 hover:text-slate-600 dark:hover:text-slate-400`}
        >
          {children}
        </Link>
      </span>
    </button>
  );
};
