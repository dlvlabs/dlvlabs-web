import { ConnectionListSection } from "@/widgets/chain";

export const ChainConnectionListPage = ({ chainId }: { chainId: string }) => {
  return (
    <div className="w-full h-full flex-1 flex flex-col items-center justify-center">
      <ConnectionListSection chainId={chainId} />
    </div>
  );
};
