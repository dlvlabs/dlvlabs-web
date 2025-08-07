"use client";
import { Divider, SectionCard } from "@/shared/ui";

import { ChainIdentifier } from "@/entities/chain";
import {
  ChainConnectionPreviewCard,
  useConnectionChains,
} from "@/features/chain";

interface ConnectionListSectionProps {
  chainId: string;
}

export const ConnectionListSection = ({
  chainId,
}: ConnectionListSectionProps) => {
  const { connectionChains, chainInfo, isLoading } =
    useConnectionChains(chainId);

  if (isLoading || !chainInfo) {
    return (
      <SectionCard>
        <div className="w-full min-h-[66vh] h-full px-4 py-5 flex items-center justify-center">
          <div>Loading...</div>
        </div>
      </SectionCard>
    );
  }

  return (
    <SectionCard>
      <div className="w-full px-8 py-3 flex justify-between items-end">
        <ChainIdentifier
          chainName={chainInfo.chainName}
          logoUrl={chainInfo.logoUrl}
          chainId={chainInfo.chainId}
        />

        <p className=" max-w-2xl text-sm text-gray-500">
          Total Connected Chains: {connectionChains.length}
        </p>
      </div>
      <Divider />
      <div className="w-full min-h-[66vh] h-full px-4 py-5 border-b">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {connectionChains.map((connectionChain) => (
            <ChainConnectionPreviewCard
              key={connectionChain.chainId}
              logoUrl={connectionChain.logoUrl}
              chainId={connectionChain.chainId}
              connectionChainName={connectionChain.chainName}
              connectionId={connectionChain.clientId}
              status={connectionChain.status}
            />
          ))}
        </div>
      </div>
    </SectionCard>
  );
};
