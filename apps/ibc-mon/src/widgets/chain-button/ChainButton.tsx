import { tcm } from "@dlvlabs/ui";
import Link from "next/link";
import { ChainCard } from "../../entities/chain/ui/chain-card";
import { CardButton } from "../../shared/ui/card-button";
interface ChainButtonProps {
  chainName: string;
  logoUrl: string;
  className?: string;
}

export const ChainButton = ({
  chainName,
  logoUrl,
  className,
}: ChainButtonProps) => {
  return (
    <CardButton
      className={tcm("w-full h-24", className)}
      component={Link}
      href={`/${chainName}`}>
      <ChainCard chainName={chainName} logoUrl={logoUrl} />
    </CardButton>
  );
};
