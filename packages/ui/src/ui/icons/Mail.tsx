import { tcm } from "../../libs";

export const Mail: React.FC<React.SVGAttributes<SVGSVGElement>> = ({
  className,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 96"
      id="email"
      className={tcm("w-5 h-5 cursor-pointer", className)}
      {...props}>
      <g id="Layer_2">
        <path
          id="Icons"
          d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z"></path>
      </g>
    </svg>
  );
};
