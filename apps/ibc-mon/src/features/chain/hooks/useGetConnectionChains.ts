import { ChainEntity } from "@/entities/chain/types";
import { chainService } from "@/features/chain/service";
import { useQueries } from "@tanstack/react-query";

export const useGetConnectionChains = (chainId: string) => {
  const [
    { data: connectionChains, isLoading: connectionChainsLoading },
    { data: chainInfo, isLoading: chainInfoLoading },
  ] = useQueries({
    queries: [
      {
        queryKey: ["connection-chains", chainId],
        queryFn: () => chainService.getCounterpartyList(chainId),
      },
      {
        queryKey: ["chain", chainId],
        queryFn: () => chainService.getInformation(chainId),
      },
    ],
  });

  return {
    connectionChains: connectionChains || [],
    chainInfo: chainInfo as ChainEntity,
    isLoading: connectionChainsLoading || chainInfoLoading,
  };
};
