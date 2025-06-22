import { StatusType } from "@/shared/types";
import { StatusIndicator } from "@/shared/ui/status-indicator";
import Link from "next/link";
import { ChainIdentifier } from "../../entities/chain/ui/chain-identifier";
import { NextIcon } from "../../shared/ui/icons";

interface ChainConnectionPreviewCardProps {
  logoUrl: string;
  chainId: string;
  connectionId: string;
  connectionChainName: string;
  status: StatusType;
}

export const ChainConnectionPreviewCard = ({
  logoUrl,
  chainId,
  connectionId,
  connectionChainName,
  status,
}: ChainConnectionPreviewCardProps) => {
  return (
    <Link href={`/chains/${chainId}/connections/${connectionId}`}>
      <div className="w-full font-[Arial] p-4 cursor-pointer rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 relative group">
        <StatusIndicator status={status} />

        <ChainIdentifier
          chainName={connectionChainName}
          logoUrl={logoUrl}
          chainId={connectionId}
          textClassName="text-slate-800 font-semibold group-hover:text-slate-600 group-hover:underline transition-colors duration-200"
          size="S"
        />

        <div className="absolute bg-slate-700 p-2 rounded-tl-xl rounded-br-xl bottom-0 right-0 transition-colors duration-200 flex justify-center items-center group-hover:bg-slate-900">
          <NextIcon className="transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};
