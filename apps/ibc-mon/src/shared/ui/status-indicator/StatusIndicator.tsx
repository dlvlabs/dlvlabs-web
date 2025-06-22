import { tcm } from "@dlvlabs/ui";
import { StatusType } from "../../types";

const STATUS_INDICATOR_STYLES = {
  ACTIVE: {
    ping: "bg-status-active-light opacity-75",
    dot: "bg-status-active-dark",
  },
  WARNING: {
    ping: "bg-status-warning-light opacity-75",
    dot: "bg-status-warning-dark",
  },
  ERROR: {
    ping: "bg-status-error-light opacity-75",
    dot: "bg-status-error-dark",
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
