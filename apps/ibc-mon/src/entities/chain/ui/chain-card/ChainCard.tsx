import Image from "next/image";

interface ChainCardProps {
  chainName: string;
  logoUrl: string;
}

export const ChainCard = ({ chainName, logoUrl }: ChainCardProps) => {
  return (
    <div className="flex items-center gap-2">
      <div>
        <Image
          src={logoUrl}
          alt={chainName}
          width={32}
          height={32}
          className="rounded-full"
        />
      </div>
      <div className="text-lg">
        {chainName
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")}
      </div>
    </div>
  );
};
