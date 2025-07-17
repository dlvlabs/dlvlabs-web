import { ChainEntity } from "@/entities/chain/types";

export interface ChainUseCase {
  getChainList: () => Promise<ChainEntity[]>;
}
