import { useQuery } from "@tanstack/react-query";
import { chainService } from "../service";

export const useChainList = () => {
  return useQuery({
    queryKey: ["chain-list"],
    queryFn: () => chainService.getList(),
  });
};
