import { tcm } from "@dlvlabs/ui";
import { HTMLAttributes } from "react";
import { StatusType } from "../../types";
import { ActiveIcon } from "../icons/active";
import { ErrorIcon } from "../icons/error";
import { WarningIcon } from "../icons/warning";

interface ConnectionStatusBarProps extends HTMLAttributes<HTMLDivElement> {
  status: StatusType;
}

export const ConnectionStatusBar = ({
  status,
  ...props
}: ConnectionStatusBarProps) => {
  const isError = status === "ERROR";
  const isWarning = status === "WARNING";

  const colorClasses = {
    line: isError
      ? "bg-gradient-to-r from-rose-400 to-rose-600 shadow-rose-300/50"
      : isWarning
        ? "bg-gradient-to-r from-yellow-400 to-orange-500 shadow-yellow-300/60"
        : "bg-gradient-to-r from-green-400 to-green-600 shadow-green-300/50",
    ping: isError
      ? "bg-rose-500/80"
      : isWarning
        ? "bg-yellow-500/70"
        : "bg-green-500/80",
    circle: isError
      ? "bg-rose-500 shadow-rose-400/50"
      : isWarning
        ? "bg-yellow-500 shadow-orange-400/60"
        : "bg-green-500 shadow-green-400/50",
  };

  return (
    <div
      className="relative flex items-center justify-center w-full"
      {...props}>
      <div
        className={tcm(
          `absolute w-full h-1 rounded-full shadow-lg`,
          colorClasses.line
        )}></div>

      <div className="relative flex items-center justify-center">
        <div className="relative">
          <span
            className={tcm(
              `absolute inset-0 animate-slow-ping rounded-full`,
              colorClasses.ping
            )}
          />
          <div
            className={tcm(
              `relative flex items-center justify-center w-5 h-5 rounded-full shadow-lg z-10 `,
              colorClasses.circle
            )}>
            {isError ? (
              <ErrorIcon />
            ) : isWarning ? (
              <WarningIcon />
            ) : (
              <ActiveIcon />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
