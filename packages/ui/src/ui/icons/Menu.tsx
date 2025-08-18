import { tcm } from "../../libs";

export const Menu: React.FC<React.SVGAttributes<SVGSVGElement>> = ({
  className,
  ...props
}) => {
  return (
    <svg
      className={tcm("w-6 h-6 cursor-pointer", className)}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
};
