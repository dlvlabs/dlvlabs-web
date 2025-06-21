import { CHAIN_LIST } from "@/shared/consts";
import { ContentContainer } from "@/shared/ui/content-container";
import Image from "next/image";
import { Divider } from "../../shared/ui/divider";
import { DataFlowIcon } from "../../shared/ui/icons";
import { formatChainName } from "../../shared/utils";
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
    <div className="w-full h-full flex-1 flex flex-col items-center justify-center py-12">
      <ContentContainer>
        <div className="w-full px-6 py-3 flex items-center gap-x-2">
          <div className="flex items-center gap-2 py-2 rounded ">
            <Image
              src={currentChain.logo}
              alt={currentChain.name}
              width={24}
              height={24}
              className="rounded-full"
            />
            <h3 className="text-xl leading-6 font-medium text-gray-900">
              {formatChainName(currentChain.name)}
            </h3>
          </div>
          <DataFlowIcon />
          <div className="flex items-center gap-2 py-2 ">
            <Image
              src={peerChain.logo}
              alt={peerChain.name}
              width={24}
              height={24}
              className="rounded-full"
            />
            <h3 className="text-xl leading-6 font-medium text-gray-900">
              {formatChainName(peerChain.name)}
            </h3>
          </div>
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
