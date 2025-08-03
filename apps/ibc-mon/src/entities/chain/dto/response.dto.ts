import { ChainCounterparty, ChainEntity } from "../types";

export type GetAllChainResponse = Array<ChainEntity>;

export type GetChainDetailResponse = ChainEntity;

export type GetCounterpartyListResponse = Array<
  Omit<ChainCounterparty, "connections">
>;

export type GetCounterpartyDetailResponse = ChainCounterparty;
