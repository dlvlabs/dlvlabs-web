import { formatChainName } from "@/shared/utils";
import { ConnectionCard } from "@/widgets/connection-card";
import Image from "next/image";
import { BasicChainType, StatusType } from "../../shared/types";
import { ContentContainer } from "../../shared/ui/content-container";
import { Divider } from "../../shared/ui/divider";

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

export const ChainPage = ({ chain }: { chain: BasicChainType }) => {
  return (
    <div className="w-full h-full flex-1 flex flex-col items-center justify-center">
      <ContentContainer>
        <div className="w-full px-8 py-3 flex justify-between items-end">
          <div className="flex items-center gap-2 py-2">
            <Image
              src={chain.logo}
              alt={chain.name}
              width={24}
              height={24}
              className="rounded-full"
            />
            <h3 className="text-xl leading-6 font-medium text-gray-900">
              {formatChainName(chain.name)}
            </h3>
          </div>
          <p className=" max-w-2xl text-sm text-gray-500">
            Total Connected Chains: {CONNECTED_CHAINS.length}
          </p>
        </div>
        <Divider />
        <div className="w-full min-h-[66vh] h-full px-12 py-5 border-b">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {CONNECTED_CHAINS.map((connectedChain) => (
              <ConnectionCard
                key={connectedChain.chainId}
                chainName={chain.name}
                logoUrl={connectedChain.logo}
                connectionChainName={connectedChain.name}
                connectionId={connectedChain.chainId}
                status={connectedChain.status as StatusType}
              />
            ))}
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};
