import { ChainIdentifier } from "@/entities/chain";
import { IBCConnectionStatusCard } from "@/features/chain";
import { CHAIN_LIST } from "@/shared/consts";
import { Divider, SectionCard } from "@/shared/ui";
import { DataFlowIcon } from "@/shared/ui/icons";

interface ConnectionStatusSectionProps {
  chainId: string;
  peerChainId: string;
}

export const ConnectionStatusSection = ({
  chainId,
  peerChainId,
}: ConnectionStatusSectionProps) => {
  const currentChain = CHAIN_LIST.find((chain) => chain.chainId === chainId);
  const peerChain = CHAIN_LIST.find((chain) => chain.chainId === peerChainId);

  if (!currentChain || !peerChain) {
    return <div>Chain not found</div>;
  }
  return (
    <SectionCard>
      <div className="w-full px-6 py-3 flex items-center gap-x-4">
        <ChainIdentifier
          chainName={currentChain.name}
          logoUrl={currentChain.logo}
          chainId={currentChain.chainId}
        />
        <DataFlowIcon />
        <ChainIdentifier
          chainName={peerChain.name}
          logoUrl={peerChain.logo}
          chainId={peerChain.chainId}
        />
      </div>
      <Divider />
      <div className="w-full min-h-[66vh] h-full px-4 py-5 border-b">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          <IBCConnectionStatusCard
            currentChain={currentChain}
            peerChain={peerChain}
            status="ACTIVE"
          />
          <IBCConnectionStatusCard
            currentChain={currentChain}
            peerChain={peerChain}
            status="WARNING"
          />
          <IBCConnectionStatusCard
            currentChain={currentChain}
            peerChain={peerChain}
            status="ERROR"
          />
        </div>
      </div>
    </SectionCard>
  );
};
