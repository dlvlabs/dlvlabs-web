import { ConnectionStatusSection } from "@/widgets/chain";

interface ChainConnectionStatusPageProps {
  chainId: string;
  clientId: string;
}

export const ChainConnectionStatusPage = ({
  chainId,
  clientId,
}: ChainConnectionStatusPageProps) => {
  return (
    <div className="w-full h-full flex-1 flex flex-col items-center justify-center py-12 mx-auto">
      <ConnectionStatusSection chainId={chainId} clientId={clientId} />
    </div>
  );
};
