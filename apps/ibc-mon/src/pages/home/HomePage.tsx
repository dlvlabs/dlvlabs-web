import { CHAIN_LIST } from "@/shared/consts";
import { ChainNavigationCard } from "@/widgets/home/chain-navigation-card";
import { IntroSection } from "@/widgets/home/intro-section";

export function HomePage() {
  return (
    <div className="w-full h-full flex-1 flex flex-col items-center justify-center gap-24">
      <IntroSection />
      <div className="flex gap-20">
        {CHAIN_LIST.map((chain) => (
          <ChainNavigationCard
            className="w-72"
            chainId={chain.chainId}
            key={chain.id}
            chainName={chain.name}
            logoUrl={chain.logo}
          />
        ))}
      </div>
    </div>
  );
}
