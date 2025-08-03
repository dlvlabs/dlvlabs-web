import { BasicChainType } from "@/shared/types";
import { ConnectionListSection } from "@/widgets/chain";

export const ChainConnectionListPage = ({
  chain,
}: {
  chain: BasicChainType;
}) => {
  return (
    <div className="w-full h-full flex-1 flex flex-col items-center justify-center">
      <ConnectionListSection chain={chain} />
    </div>
  );
};
