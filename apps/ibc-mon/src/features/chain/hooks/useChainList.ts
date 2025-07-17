import { useQuery } from "@tanstack/react-query";
import { ChainService } from "../service";

export const useChainList = () => {
  return useQuery({
    queryKey: ["chain-list"],
    queryFn: () => ChainService().getChainList(),
  });
};
