import { CHAIN_LIST } from "@/shared/consts";
import { ContentContainer } from "@/shared/ui/content-container";
import { ChainIdentifier } from "../../entities/chain/ui/chain-identifier";
import { Divider } from "../../shared/ui/divider";
import { DataFlowIcon } from "../../shared/ui/icons";
import { ChainConnectionDetailCard } from "../../widgets/connection-detail-card";

interface ChainConnectionDetailPageProps {
  chainId: string;
  peerChainId: string;
}

export const ChainConnectionDetailPage = ({
  chainId,
  peerChainId,
}: ChainConnectionDetailPageProps) => {
  const currentChain = CHAIN_LIST.find((chain) => chain.chainId === chainId);
  const peerChain = CHAIN_LIST.find((chain) => chain.chainId === peerChainId);

  if (!currentChain || !peerChain) {
    return <div>Chain not found</div>;
  }

  return (
    <div className="w-full h-full flex-1 flex flex-col items-center justify-center py-12 mx-auto">
      <ContentContainer>
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
            <ChainConnectionDetailCard
              currentChain={currentChain}
              peerChain={peerChain}
              status="ACTIVE"
            />
            <ChainConnectionDetailCard
              currentChain={currentChain}
              peerChain={peerChain}
              status="WARNING"
            />
            <ChainConnectionDetailCard
              currentChain={currentChain}
              peerChain={peerChain}
              status="ERROR"
            />
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};
