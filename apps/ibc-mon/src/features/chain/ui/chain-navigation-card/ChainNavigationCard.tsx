import { ChainIdentifier } from "@/entities/chain";
import { SpotlightCard, tcm } from "@dlvlabs/ui";
import Link from "next/link";
interface ChainNavigationCardProps
  extends React.HTMLAttributes<HTMLAnchorElement> {
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
  ...props
}: ChainNavigationCardProps) => {
  return (
    <SpotlightCard
      className={tcm("h-20", className)}
      component={Link}
      href={`/chains/${chainId}`}
      {...props}>
      <ChainIdentifier chainName={chainName} logoUrl={logoUrl} />
    </SpotlightCard>
  );
};
