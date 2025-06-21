import { tcm } from "@dlvlabs/ui";
import { StatusType } from "../../types";

const STATUS_INDICATOR_STYLES = {
  ACTIVE: {
    ping: "bg-emerald-400 opacity-75",
    dot: "bg-emerald-500",
  },
  WARNING: {
    ping: "bg-amber-400 opacity-75",
    dot: "bg-amber-500",
  },
  ERROR: {
    ping: "bg-rose-400 opacity-75",
    dot: "bg-rose-500",
  },
};

interface StatusIndicatorProps {
  status: StatusType;
}
export const StatusIndicator = ({ status }: StatusIndicatorProps) => {
  return (
    <div className="absolute top-2 right-2 flex size-3 z-10">
      <span
        className={tcm(
          `absolute inline-flex h-full w-full animate-slow-ping rounded-full`,
          STATUS_INDICATOR_STYLES[status].ping
        )}
      />
      <span
        className={tcm(
          `relative inline-flex size-3 rounded-full`,
          STATUS_INDICATOR_STYLES[status].dot
        )}
      />
    </div>
  );
};
