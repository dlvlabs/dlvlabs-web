import { tcm } from "@dlvlabs/ui";

export const DataFlowIcon = ({
  className,
  ...props
}: React.SVGAttributes<SVGSVGElement>) => (
  <svg
    className={tcm("w-8 h-8 text-slate-500", className)}
    viewBox="0 0 32 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <circle cx="2" cy="12" r="2" fill="currentColor">
      <animate
        attributeName="opacity"
        values="1;0.3;1"
        dur="2s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="9" cy="12" r="2" fill="currentColor">
      <animate
        attributeName="opacity"
        values="1;0.3;1"
        dur="2s"
        repeatCount="indefinite"
        begin="0.2s"
      />
    </circle>
    <circle cx="16" cy="12" r="2" fill="currentColor">
      <animate
        attributeName="opacity"
        values="1;0.3;1"
        dur="2s"
        repeatCount="indefinite"
        begin="0.4s"
      />
    </circle>
    <circle cx="23" cy="12" r="2" fill="currentColor">
      <animate
        attributeName="opacity"
        values="1;0.3;1"
        dur="2s"
        repeatCount="indefinite"
        begin="0.6s"
      />
    </circle>
    <circle cx="30" cy="12" r="2" fill="currentColor">
      <animate
        attributeName="opacity"
        values="1;0.3;1"
        dur="2s"
        repeatCount="indefinite"
        begin="0.8s"
      />
    </circle>
  </svg>
);
