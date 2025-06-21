import Image from "next/image";
import { HTMLAttributes } from "react";
import { BasicChainType } from "../../shared/types";
import { Connection } from "../../shared/ui/connection";
import { Divider } from "../../shared/ui/divider";
import { formatChainName } from "../../shared/utils";

interface ChainConnectionDetailCardProps
  extends HTMLAttributes<HTMLDivElement> {
  status: "ACTIVE" | "WARNING" | "ERROR";
  currentChain: BasicChainType;
  peerChain: BasicChainType;
}

export const ChainConnectionDetailCard = ({
  status,
  currentChain,
  peerChain,
}: ChainConnectionDetailCardProps) => {
  const getStatusStyles = () => {
    switch (status) {
      case "ACTIVE":
        return {
          iconBg: "bg-green-50",
          glowColor: "#23c55e",
          glowShadow: "0 0 70px 30px rgba(35, 197, 94, 0.3)",
          iconColor: "#23c55e",
          linkColor: "text-[#072713]",
        };
      case "WARNING":
        return {
          iconBg: "bg-yellow-50",
          glowColor: "#eab308",
          glowShadow: "0 0 70px 30px rgba(234, 179, 8, 0.3)",
          iconColor: "#eab308",
          linkColor: "text-yellow-800",
        };
      case "ERROR":
        return {
          iconBg: "bg-red-50",
          glowColor: "#ef4444",
          glowShadow: "0 0 70px 30px rgba(239, 68, 68, 0.3)",
          iconColor: "#ef4444",
          linkColor: "text-red-800",
        };
    }
  };

  const styles = getStatusStyles();

  return (
    <div className="relative flex flex-col items-start p-4 w-full rounded-lg bg-white shadow-[0px_0px_14px_0px_rgba(192,192,192,0.2)] overflow-hidden">
      {/* 오른쪽 하단 블러 효과 */}
      <div
        className="absolute bottom-2 right-2 w-8 h-8 rounded-full opacity-60 blur-2xl"
        style={{
          backgroundColor: styles.iconColor,
          boxShadow: `0 0 30px 10px ${styles.iconColor}60`,
        }}
      />

      <div className="w-full py-2 flex items-center gap-x-2">
        <div className="flex items-center gap-2 py-2 rounded ">
          <Image
            src={currentChain.logo}
            alt={currentChain.name}
            width={24}
            height={24}
            className="rounded-full"
          />
          <h3 className="text-md leading-6 font-medium text-gray-900">
            {formatChainName(currentChain.name)}
          </h3>
        </div>
        {status && <Connection status={status} />}
        <div className="flex items-center gap-2 py-2 ">
          <Image
            src={peerChain.logo}
            alt={peerChain.name}
            width={24}
            height={24}
            className="rounded-full"
          />
          <h3 className="text-md leading-6 font-medium text-gray-900">
            {formatChainName(peerChain.name)}
          </h3>
        </div>
      </div>
      <Divider />

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
