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
      ? "bg-gradient-to-r from-status-error-light to-status-error-darker shadow-status-error-light/50"
      : isWarning
        ? "bg-gradient-to-r from-status-warning-light to-status-warning-orange shadow-status-warning-light/60"
        : "bg-gradient-to-r from-status-active-light to-status-active-dark shadow-status-active-light/50",
    ping: isError
      ? "bg-status-error-dark/80"
      : isWarning
        ? "bg-status-warning-dark/70"
        : "bg-status-active-dark/80",
    circle: isError
      ? "bg-status-error-dark shadow-status-error-light/50"
      : isWarning
        ? "bg-status-warning-dark shadow-status-warning-orange/60"
        : "bg-status-active-dark shadow-status-active-light/50",
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
