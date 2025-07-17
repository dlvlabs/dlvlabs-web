import { DUMMY_CHAIN_LIST } from "@/entities/chain";
import { ChainUseCase } from "../usecase";

export const ChainService = (): ChainUseCase => ({
  getChainList: async () => {
    return DUMMY_CHAIN_LIST;
  },
});
