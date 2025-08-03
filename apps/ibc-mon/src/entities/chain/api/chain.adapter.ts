import {
  GetChainDetailResponse,
  GetCounterpartyDetailResponse,
  GetCounterpartyListResponse,
} from "@/entities/chain/dto/response.dto";
import { apiClient } from "@/shared/api";
import { GetAllChainResponse } from "../dto";

export const ChainAdapter = () => ({
  getList: async () => {
    const response = await apiClient.get<GetAllChainResponse>("/chains");
    return response.data;
  },
  getChainInformation: async (chainId: string) => {
    const response = await apiClient.get<GetChainDetailResponse>(
      `/chains/${chainId}`
    );
    return response.data;
  },
  getCounterpartyList: async (chainId: string) => {
    const response = await apiClient.get<GetCounterpartyListResponse>(
      `/chains/${chainId}/counterparties`
    );
    return response.data;
  },
  getCounterpartyDetail: async (chainId: string, clientId: string) => {
    const response = await apiClient.get<GetCounterpartyDetailResponse>(
      `/chains/${chainId}/counterparties/${clientId}`
    );
    return response.data;
  },
});
