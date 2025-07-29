import { ChainEntity } from "../types";

export type GetAllChainResponse = Array<Omit<ChainEntity, "counterparties">>;

export type GetChainDetailResponse = ChainEntity;
