import {
  ChainCounterparty,
  ChainEntity,
  ConnectionChainEntity,
} from "../types";

export type GetAllChainResponse = Array<ChainEntity>;

export type GetChainDetailResponse = ChainEntity;

export type GetCounterpartyListResponse = Array<ConnectionChainEntity>;

export type GetCounterpartyDetailResponse = ChainCounterparty;
