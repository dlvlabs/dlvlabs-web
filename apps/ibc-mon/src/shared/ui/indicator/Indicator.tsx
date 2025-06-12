import { tcm } from "@dlvlabs/ui";
import { StatusType } from "../../types";

const STATUS_INDICATOR = {
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

interface IndicatorProps {
  status: StatusType;
}
export const Indicator = ({ status }: IndicatorProps) => {
  if (!status) {
    return null;
  }
  return (
    <div className="absolute top-2 right-2 flex size-3 z-10">
      <span
        className={tcm(
          `absolute inline-flex h-full w-full animate-ping rounded-full`,
          STATUS_INDICATOR[status].ping
        )}
      />
      <span
        className={tcm(
          `relative inline-flex size-3 rounded-full`,
          STATUS_INDICATOR[status].dot
        )}
      />
    </div>
  );
};
