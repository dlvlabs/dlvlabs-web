import { tcm } from "@dlvlabs/ui";
import Link from "next/link";
import { ChainCard } from "../../entities/chain/ui/chain-card";
import { StatusType } from "../../shared/types";
import { CardButton } from "../../shared/ui/card-button";
import { Indicator } from "../../shared/ui/indicator";

interface ChainButtonProps {
  chainName: string;
  logoUrl: string;
  status: StatusType;
  className?: string;
}

export const ChainButton = ({
  chainName,
  logoUrl,
  status,
  className,
}: ChainButtonProps) => {
  return (
    <CardButton
      className={tcm("w-full h-24", className)}
      component={Link}
      href={`/${chainName}`}>
      <Indicator status={status} />
      <ChainCard chainName={chainName} logoUrl={logoUrl} />
    </CardButton>
  );
};
