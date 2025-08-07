import { ChainAdapter } from "@/entities/chain";
import { ChainService } from "@/features/chain/service/chain.service";

export const createChainService = () => {
  return ChainService(ChainAdapter());
};
