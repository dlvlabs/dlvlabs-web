import { ConnectionStatusSection } from "@/widgets/chain";

interface ChainConnectionStatusPageProps {
  chainId: string;
  peerChainId: string;
}

export const ChainConnectionStatusPage = ({
  chainId,
  peerChainId,
}: ChainConnectionStatusPageProps) => {
  return (
    <div className="w-full h-full flex-1 flex flex-col items-center justify-center py-12 mx-auto">
      <ConnectionStatusSection chainId={chainId} peerChainId={peerChainId} />
    </div>
  );
};
