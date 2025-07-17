import { StatusType } from "@/shared/types";

export interface ChainEntity {
  chainName: string;
  logoUrl: string;
  chainId: string;
  counterparties?: CounterpartyChainEntity[] | null;
}

export interface CounterpartyChainEntity
  extends Omit<ChainEntity, "counterparties"> {
  clientId: string;
  status: StatusType | null;
  connections?: ConnectionChainEntity[];
}
export interface ConnectionChainEntity {
  connectionId: string;
  channels: ChannelChainEntity[];
}

export interface ChannelChainEntity {
  channelId: string;
  sequence: number;
  problem: string;
  latestIBCTx: string;
  status: StatusType | null;
}
