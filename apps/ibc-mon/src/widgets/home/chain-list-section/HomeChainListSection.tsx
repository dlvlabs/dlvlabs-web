"use client";
import { ChainNavigationCard, useGetChainList } from "@/features/chain";
import { tcm } from "@dlvlabs/ui";

export const HomeChainListSection = () => {
  const { data, isLoading, isFetching } = useGetChainList();

  const isTransitioning = isLoading || isFetching;

  return (
    <section className="w-full relative z-10 md:px-16 lg:px-24 xl:px-32">
      <div
        className={tcm(
          "w-full py-16 px-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-700 ease-in-out",
          isTransitioning
            ? "opacity-0 translate-y-2"
            : "opacity-100 translate-y-0"
        )}>
        {data?.map((chain) => (
          <ChainNavigationCard
            className="w-full relative z-20"
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
