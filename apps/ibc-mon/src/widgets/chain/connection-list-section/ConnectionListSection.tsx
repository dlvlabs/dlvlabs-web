import { Divider, SectionCard } from "@/shared/ui";

import { ChainIdentifier } from "@/entities/chain";
import { ChainConnectionPreviewCard } from "@/features/chain";
import { BasicChainType, StatusType } from "@/shared/types";

const CONNECTED_CHAINS = [
  {
    name: "cosmos-hub",
    logo: "/images/cosmos.png",
    chainId: "cosmoshub-4",
    status: "ACTIVE",
  },
  {
    name: "osmosis",
    logo: "/images/osmosis.png",
    chainId: "osmosis-1",
    status: "WARNING",
  },
  {
    name: "milky-way",
    logo: "/images/milkyway.png",
    chainId: "milkyway-1",
    status: "ERROR",
  },
];

interface ConnectionListSectionProps {
  chain: BasicChainType;
}

export const ConnectionListSection = ({
  chain,
}: ConnectionListSectionProps) => {
  return (
    <SectionCard>
      <div className="w-full px-8 py-3 flex justify-between items-end">
        <ChainIdentifier
          chainName={chain.name}
          logoUrl={chain.logo}
          chainId={chain.chainId}
        />

        <p className=" max-w-2xl text-sm text-gray-500">
          Total Connected Chains: {CONNECTED_CHAINS.length}
        </p>
      </div>
      <Divider />
      <div className="w-full min-h-[66vh] h-full px-4 py-5 border-b">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {CONNECTED_CHAINS.map((connectedChain) => (
            <ChainConnectionPreviewCard
              key={connectedChain.chainId}
              logoUrl={connectedChain.logo}
              chainId={chain.chainId}
              connectionChainName={connectedChain.name}
              connectionId={connectedChain.chainId}
              status={connectedChain.status as StatusType}
            />
          ))}
        </div>
      </div>
    </SectionCard>
  );
};
