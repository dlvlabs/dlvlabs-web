import { ChainCounterparty, ChainEntity } from "@/entities/chain";
import { chainService } from "@/features/chain/service";
import { useQueries } from "@tanstack/react-query";

export const useGetChainCounterparties = (
  chainId: string,
  clientId: string
) => {
  const [
    { data: counterparties, isLoading: counterpartiesLoading },
    { data: chainInfo, isLoading: chainInfoLoading },
  ] = useQueries({
    queries: [
      {
        queryKey: ["counterparties-chains", clientId],
        queryFn: () => chainService.getCounterpartyDetail(chainId, clientId),
      },
      {
        queryKey: ["chain", chainId],
        queryFn: () => chainService.getInformation(chainId),
      },
    ],
  });

  return {
    counterparties: counterparties as ChainCounterparty,
    chainInfo: chainInfo as ChainEntity,
    isLoading: counterpartiesLoading || chainInfoLoading,
  };
};
