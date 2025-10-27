import { tcm } from "@dlvlabs/ui";
import Image from "next/image";

interface ChainIdentifierProps {
  chainName: string;
  logoUrl: string;
  size?: "S" | "M";
  chainId?: string;
  textClassName?: string;
}

export const ChainIdentifier = ({
  chainName,
  logoUrl,
  size = "M",
  chainId,
  textClassName,
}: ChainIdentifierProps) => {
  return (
    <div className="flex items-center gap-2 p-2">
      <Image
        src={logoUrl}
        alt={chainName}
        width={32}
        height={32}
        className="rounded-full"
      />
      <div className="flex flex-col">
        <h3
          className={tcm(
            `text-neutral-300 font-medium leading-6`,
            size === "S" ? "text-md" : "text-xl",
            textClassName
          )}>
          {chainName
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </h3>
        {chainId && (
          <p className="text-neutral-600 text-xs">ChainId: {chainId}</p>
        )}
      </div>
    </div>
  );
};
