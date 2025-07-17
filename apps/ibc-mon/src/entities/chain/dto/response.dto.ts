import { ChainEntity } from "../types";

export type GetAllChainResponse = Omit<ChainEntity, "counterparties">;
