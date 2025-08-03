import { StatusType } from "@/shared/types";

export type ChainEntity = {
  chainName: string;
  logoUrl: string;
  chainId: string;
};

export type ChannelChainEntity = {
  channelId: string;
  status: StatusType;
  problem: string;
  sequence: number;
  latestIBCTx: string;
};

export type ChainCounterparty = {
  status: StatusType;
  chainName: string;
  chainId: string;
  clientId: string;
  logoUrl: string;
  connections: Array<{
    connectionId: string;
    channels: ChannelChainEntity[];
  }>;
};
