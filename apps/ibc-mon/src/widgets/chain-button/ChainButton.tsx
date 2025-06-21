import { ChainIdentifier } from "@/entities/chain/ui/chain-identifier";
import { CardButton } from "@/shared/ui/card-button";
import { tcm } from "@dlvlabs/ui";
import Link from "next/link";
interface ChainButtonProps {
  chainName: string;
  logoUrl: string;
  chainId: string;
  className?: string;
}

export const ChainButton = ({
  chainName,
  logoUrl,
  chainId,
  className,
}: ChainButtonProps) => {
  return (
    <CardButton
      className={tcm("w-full h-24", className)}
      component={Link}
      href={`/chains/${chainId}`}>
      <ChainIdentifier chainName={chainName} logoUrl={logoUrl} />
    </CardButton>
  );
};
