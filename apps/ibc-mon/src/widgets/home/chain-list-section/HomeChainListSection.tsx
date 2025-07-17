"use client";
import { ChainNavigationCard, useChainList } from "@/features/chain";
import { tcm } from "@dlvlabs/ui";

export const HomeChainListSection = () => {
  const { data, isLoading, isFetching } = useChainList();

  const isTransitioning = isLoading || isFetching;

  return (
    <section className="flex gap-20 relative overflow-hidden">
      <div
        className={tcm(
          "p-32 h-24 flex items-center justify-center gap-20 transition-all duration-700 ease-in-out",
          isTransitioning
            ? "opacity-0 translate-y-2"
            : "opacity-100 translate-y-0"
        )}>
        {data?.map((chain) => (
          <ChainNavigationCard
            className="w-72"
            chainId={chain.chainId}
            key={chain.chainId}
            chainName={chain.chainName}
            logoUrl={chain.logoUrl}
          />
        ))}
      </div>
    </section>
  );
};
