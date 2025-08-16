"use client";
import { ChainIdentifier } from "@/entities/chain";
import {
  IBCConnectionStatusCard,
  useGetChainCounterparties,
} from "@/features/chain";
import { Divider, SectionCard } from "@/shared/ui";
import { DataFlowIcon } from "@/shared/ui/icons";

interface ConnectionStatusSectionProps {
  chainId: string;
  clientId: string;
}

export const ConnectionStatusSection = ({
  chainId,
  clientId,
}: ConnectionStatusSectionProps) => {
  const { counterparties, chainInfo, isLoading } = useGetChainCounterparties(
    chainId,
    clientId
  );

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
      <div className="w-full px-6 py-3 flex items-center gap-x-4">
        <ChainIdentifier
          chainName={chainInfo.chainName}
          logoUrl={chainInfo.logoUrl}
          chainId={chainInfo.chainId}
        />
        <DataFlowIcon />
        <ChainIdentifier
          chainName={counterparties.chainName}
          logoUrl={counterparties.logoUrl}
          chainId={counterparties.chainId}
        />
      </div>
      <Divider />
      <div className="w-full min-h-[66vh] h-full px-4 py-5 border-b">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {counterparties.connections.map((connection) => (
            <IBCConnectionStatusCard
              key={connection.channelId}
              currentChain={chainInfo}
              counterpartyChain={{
                chainName: counterparties.chainName,
                logoUrl: counterparties.logoUrl,
                chainId: counterparties.chainId,
                clientId: counterparties.clientId,
              }}
              connectionChain={connection}
              status="ACTIVE"
            />
          ))}
        </div>
      </div>
    </SectionCard>
  );
};
