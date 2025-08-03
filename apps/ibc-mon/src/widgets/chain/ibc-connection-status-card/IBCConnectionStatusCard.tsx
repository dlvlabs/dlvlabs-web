import { ChainIdentifier } from "@/entities/chain";
import { BasicChainType } from "@/shared/types";
import { ConnectionStatusBar } from "@/shared/ui";
import { Clipboard } from "@/shared/ui/icons";
import { tcm } from "@dlvlabs/ui";
import { Fragment, HTMLAttributes } from "react";

interface IBCConnectionStatusCardProps extends HTMLAttributes<HTMLDivElement> {
  status: "ACTIVE" | "WARNING" | "ERROR";
  currentChain: BasicChainType;
  peerChain: BasicChainType;
}

const STATUS_STYLES = {
  ACTIVE: `bg-status-active shadow-[0_0_70px_30px_theme(colors.status.active.glow)]`,
  WARNING: `bg-status-warning shadow-[0_0_70px_30px_theme(colors.status.warning.glow)]`,
  ERROR: `bg-status-error shadow-[0_0_70px_30px_theme(colors.status.error.glow)]`,
};

export const IBCConnectionStatusCard = ({
  status,
  currentChain,
  peerChain,
}: IBCConnectionStatusCardProps) => {
  return (
    <div className="relative flex flex-col items-start p-4 w-full rounded-lg bg-white shadow-[0px_0px_14px_0px_rgba(192,192,192,0.2)] overflow-hidden">
      <div
        className={tcm(
          "absolute bottom-2 right-2 w-8 h-8 rounded-full opacity-60 blur-2xl",
          STATUS_STYLES[status]
        )}
      />
      <div className="w-full py-2 flex items-center">
        <div className="flex-none">
          <ChainIdentifier
            chainName={currentChain.name}
            logoUrl={currentChain.logo}
            size="S"
          />
        </div>
        <ConnectionStatusBar status={status} />
        <div className="flex-none">
          <ChainIdentifier
            chainName={peerChain.name}
            logoUrl={peerChain.logo}
            size="S"
          />
        </div>
      </div>

      <div className="mt-3 w-full overflow-hidden text-sm">
        <table className="w-full table-fixed px-2">
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="py-3 pr-8 font-medium text-gray-700 whitespace-nowrap w-2/5">
                Client ID
              </td>
              <td className="py-3 pl-4 text-[#7e8882]">Client ID</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 pr-8 font-medium text-gray-700 whitespace-nowrap">
                Connection ID
              </td>
              <td className="py-3 pl-4 text-[#7e8882]">Connection ID</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 pr-8 font-medium text-gray-700 whitespace-nowrap">
                Channel ID
              </td>
              <td className="py-3 pl-4 text-[#7e8882]">Channel ID</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 pr-8 font-medium text-gray-700 whitespace-nowrap">
                Port ID
              </td>
              <td className="py-3 pl-4 text-[#7e8882]">Port ID</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 pr-8 font-medium text-gray-700 whitespace-nowrap">
                Sequence
              </td>
              <td className="py-3 pl-4 text-[#7e8882]">Sequence</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 pr-8 font-medium text-gray-700 whitespace-nowrap">
                Latest IBC Transaction
              </td>
              <td className="w-full py-3 pl-4 text-[#7e8882] flex items-center space-x-2">
                <div
                  className="w-full  truncate overflow-hidden whitespace-nowrap"
                  title="5AA7D65A234AE2B5609AB3FD920D38493968BBCB99492CDA3040BC58DA651820">
                  5AA7D65A234AE2B5609AB3FD920D38493968BBCB99492CDA3040BC58DA651820
                </div>
                <Clipboard className="cursor-pointer" />
              </td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 pr-8 font-medium text-gray-700 whitespace-nowrap">
                Status
              </td>
              <td className="py-3 pl-4 text-[#7e8882]">{status}</td>
            </tr>
            <tr>
              {status !== "ACTIVE" && (
                <Fragment>
                  <td className="py-3 pr-8 font-medium text-gray-700 whitespace-nowrap align-top">
                    Problem
                  </td>
                  <td className="py-3 pl-4 text-[#7e8882]">Problem texts</td>
                </Fragment>
              )}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
