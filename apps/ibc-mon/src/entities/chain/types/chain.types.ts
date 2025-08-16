import { StatusType } from "@/shared/types";

export type ChainEntity = {
  chainName: string;
  logoUrl: string;
  chainId: string;
};

export type ConnectionChainEntity = Omit<ChainCounterparty, "connections"> & {
  status: StatusType;
};

export type ChainCounterparty = {
  chainName: string;
  chainId: string;
  clientId: string;
  logoUrl: string;
  connections: Array<ChainConnection>;
};

export type ChainConnection = {
  connectionId: string;
  channelId: string;
  status: StatusType;
  problem: string;
  sequence: number;
  portId: string;
  latestIBCTx: string;
};
