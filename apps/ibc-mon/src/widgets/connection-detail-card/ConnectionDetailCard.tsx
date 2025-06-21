import { tcm } from "@dlvlabs/ui";
import { HTMLAttributes } from "react";
import { ChainIdentifier } from "../../entities/chain/ui/chain-identifier";
import { BasicChainType } from "../../shared/types";
import { Connection } from "../../shared/ui/connection";

interface ChainConnectionDetailCardProps
  extends HTMLAttributes<HTMLDivElement> {
  status: "ACTIVE" | "WARNING" | "ERROR";
  currentChain: BasicChainType;
  peerChain: BasicChainType;
}

const STATUS_STYLES = {
  ACTIVE: `bg-[#23c55e] shadow-[0_0_70px_30px_rgba(35,197,94,0.6)]`,
  WARNING: `bg-[#eab308] shadow-[0_0_70px_30px_rgba(234,179,8,0.6)]`,
  ERROR: `bg-[#ef4444] shadow-[0_0_70px_30px_rgba(239,68,68,0.6)]`,
};

export const ChainConnectionDetailCard = ({
  status,
  currentChain,
  peerChain,
}: ChainConnectionDetailCardProps) => {
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
        <Connection status={status} />
        <div className="flex-none">
          <ChainIdentifier
            chainName={peerChain.name}
            logoUrl={peerChain.logo}
            size="S"
          />
        </div>
      </div>

      <div className="mt-3 w-full overflow-hidden text-sm">
        <table className="min-w-full table-fixed">
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="py-3 pr-8 font-medium text-gray-700 whitespace-nowrap w-2/5">
                Channel Name
              </td>
              <td className="py-3 pl-4 text-[#7e8882]">Channel-1</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 pr-8 font-medium text-gray-700 whitespace-nowrap">
                Untreated Transaction
              </td>
              <td className="py-3 pl-4 text-[#7e8882]">1</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 pr-8 font-medium text-gray-700 whitespace-nowrap">
                Timeout Transaction
              </td>
              <td className="py-3 pl-4 text-[#7e8882]">1</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 pr-8 font-medium text-gray-700 whitespace-nowrap">
                Status
              </td>
              <td className="py-3 pl-4 text-[#7e8882]">{status}</td>
            </tr>
            <tr>
              <td className="py-3 pr-8 font-medium text-gray-700 whitespace-nowrap align-top">
                Reason
              </td>
              <td className="py-3 pl-4 text-[#7e8882]">Reason texts</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
