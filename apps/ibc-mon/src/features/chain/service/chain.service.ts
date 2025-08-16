import { ChainAdapter } from "@/entities/chain/api/chain.adapter";
import { ChainEntity } from "@/entities/chain/types";
import { ChainUseCase } from "../usecase";

export const ChainService = (
  chaiAdapter: ReturnType<typeof ChainAdapter>
): ChainUseCase => ({
  getInformation: async (chainId: string) => {
    try {
      return (await chaiAdapter.getChainInformation(
        chainId
      )) as unknown as ChainEntity;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  getList: async () => {
    return await chaiAdapter.getList();
  },
  getCounterpartyList: async (chainId: string) => {
    try {
      return await chaiAdapter.getCounterpartyList(chainId);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  getCounterpartyDetail: async (chainId: string, clientId: string) => {
    try {
      return await chaiAdapter.getCounterpartyDetail(chainId, clientId);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
});
