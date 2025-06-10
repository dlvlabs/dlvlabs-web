import { tcm } from "@dlvlabs/ui";
import Image from "next/image";
import Link from "next/link";
import { ChainCard } from "../../entities/chain/ui/chain-card";
import { BasicChainType, StatusType } from "../../shared/types";
import { CardButton } from "../../shared/ui/card-button";
import { ContentContainer } from "../../shared/ui/content-container";
import { Divider } from "../../shared/ui/divider";
import { Indicator } from "../../shared/ui/indicator";

const CONNECTED_CHAINS = [
  {
    name: "cosmos-hub",
    logo: "/images/cosmos.png",
    chainId: "cosmoshub-4",
    status: "normal",
  },
  {
    name: "osmosis",
    logo: "/images/osmosis.png",
    chainId: "osmosis-1",
    status: "warning",
  },
  {
    name: "milky-way",
    logo: "/images/milkyway.png",
    chainId: "milkyway-1",
    status: "error",
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
              {chain.name
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </h3>
          </div>
          <p className=" max-w-2xl text-sm text-gray-500">
            Total Connected Chains: 4
          </p>
        </div>
        <Divider />
        <div className="w-full min-h-[66vh] h-full px-12 py-5 border-b">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {CONNECTED_CHAINS.map((connectedChain) => (
              <CardButton
                key={connectedChain.chainId}
                className={tcm("w-full h-24")}
                component={Link}
                href={`/${chain.name}/${connectedChain.name}`}>
                <Indicator status={connectedChain.status as StatusType} />
                <ChainCard
                  chainName={connectedChain.name}
                  logoUrl={connectedChain.logo}
                />
              </CardButton>
            ))}
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};
