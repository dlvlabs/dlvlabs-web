import { apiClient } from "@/shared/api";
import { GetAllChainResponse } from "../dto";

export const ChainAdapter = () => ({
  getList: async () => {
    const response = await apiClient.get<GetAllChainResponse>("/info");
    return response.data;
  },
});
