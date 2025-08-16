import { useQuery } from "@tanstack/react-query";
import { chainService } from "../service";

export const useGetChainList = () => {
  return useQuery({
    queryKey: ["chain-list"],
    queryFn: () => chainService.getList(),
  });
};
