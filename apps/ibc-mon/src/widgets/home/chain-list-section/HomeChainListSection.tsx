"use client";
import { ChainNavigationCard, useGetChainList } from "@/features/chain";
import { tcm } from "@dlvlabs/ui";

export const HomeChainListSection = () => {
  const { data, isLoading, isFetching } = useGetChainList();

  const isTransitioning = isLoading || isFetching;

  return (
    <section className="w-full flex gap-20 relative overflow-hidden mx-auto md:px-32 lg:px-48 xl:px-64">
      <div
        className={tcm(
          "w-full mx-24 py-32 h-24 flex items-center justify-center gap-20 transition-all duration-700 ease-in-out",
          isTransitioning
            ? "opacity-0 translate-y-2"
            : "opacity-100 translate-y-0"
        )}>
        {data?.map((chain) => (
          <ChainNavigationCard
            className="w-full"
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
