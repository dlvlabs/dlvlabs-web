import { ChainIdentifier } from "@/entities/chain";
import { InteractiveCard } from "@/shared/ui/interactive-card";
import { tcm } from "@dlvlabs/ui";
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
    <InteractiveCard
      className={tcm("w-full h-24", className)}
      component={Link}
      href={`/chains/${chainId}`}
      {...props}>
      <ChainIdentifier chainName={chainName} logoUrl={logoUrl} />
    </InteractiveCard>
  );
};
