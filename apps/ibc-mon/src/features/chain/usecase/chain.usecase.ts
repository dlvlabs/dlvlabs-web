import { ChainEntity, ConnectionChainEntity } from "@/entities/chain/types";

export interface ChainUseCase {
  getInformation: (chainId: string) => Promise<ChainEntity>;
  getList: () => Promise<ChainEntity[]>;
  getCounterpartyList: (chainId: string) => Promise<ConnectionChainEntity[]>;
}
