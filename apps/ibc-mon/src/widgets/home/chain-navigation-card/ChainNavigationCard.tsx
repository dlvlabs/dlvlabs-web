import { ChainIdentifier } from "@/entities/chain/ui/chain-identifier";
import { InteractiveCard } from "@/shared/ui/interactive-card";
import { tcm } from "@dlvlabs/ui";
import Link from "next/link";
interface ChainNavigationCardProps {
  chainName: string;
  logoUrl: string;
  chainId: string;
  className?: string;
}

export const ChainNavigationCard = ({
  chainName,
  logoUrl,
  chainId,
  className,
}: ChainNavigationCardProps) => {
  return (
    <InteractiveCard
      className={tcm("w-full h-24", className)}
      component={Link}
      href={`/chains/${chainId}`}>
      <ChainIdentifier chainName={chainName} logoUrl={logoUrl} />
    </InteractiveCard>
  );
};
