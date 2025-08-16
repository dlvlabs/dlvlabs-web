import {
  DUMMY_CHAIN_LIST,
  DUMMY_CONNECTION_CHAIN_DETAIL,
  DUMMY_CONNECTION_CHAIN_LIST,
} from "@/entities/chain/const/dummy.const";
import {
  GetChainDetailResponse,
  GetCounterpartyDetailResponse,
  GetCounterpartyListResponse,
} from "@/entities/chain/dto/response.dto";
import { apiClient } from "@/shared/api";
import { GetAllChainResponse } from "../dto";

export const ChainAdapter = () => ({
  getList: async () => {
    return DUMMY_CHAIN_LIST;

    const response = await apiClient.get<GetAllChainResponse>("/chains");
    return response.data;
  },
  getChainInformation: async (chainId: string) => {
    console.log("adapter chainId", chainId);
    return DUMMY_CHAIN_LIST.find((c) => c.chainId === chainId);

    const response = await apiClient.get<GetChainDetailResponse>(
      `/chains/${chainId}`
    );
    return response.data;
  },
  getCounterpartyList: async (chainId: string) => {
    return DUMMY_CONNECTION_CHAIN_LIST;
    const response = await apiClient.get<GetCounterpartyListResponse>(
      `/chains/${chainId}/counterparties`
    );
    return response.data;
  },
  getCounterpartyDetail: async (chainId: string, clientId: string) => {
    return DUMMY_CONNECTION_CHAIN_DETAIL;
    const response = await apiClient.get<GetCounterpartyDetailResponse>(
      `/chains/${chainId}/counterparties/${clientId}`
    );
    return response.data;
  },
});
