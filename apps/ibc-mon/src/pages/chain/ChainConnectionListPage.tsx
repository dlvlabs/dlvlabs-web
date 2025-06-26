import { BasicChainType, StatusType } from "@/shared/types";
import { Divider } from "@/shared/ui/divider";
import { PageCard } from "@/shared/ui/page-card";
import { ChainConnectionPreviewCard } from "@/widgets/chain-connection-preview-card";
import { ChainIdentifier } from "../../entities/chain/ui/chain-identifier";

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

export const ChainConnectionListPage = ({
  chain,
}: {
  chain: BasicChainType;
}) => {
  return (
    <div className="w-full h-full flex-1 flex flex-col items-center justify-center">
      <PageCard>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
      </PageCard>
    </div>
  );
};
