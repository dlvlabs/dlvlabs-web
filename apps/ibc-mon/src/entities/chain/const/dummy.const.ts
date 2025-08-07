import { ChainEntity, ConnectionChainEntity } from "@/entities/chain/types";

export const DUMMY_CHAIN_LIST: ChainEntity[] = [
  {
    chainName: "cosmos-hub",
    logoUrl: "/images/cosmos.png",
    chainId: "cosmoshub-4",
  },
  {
    chainName: "osmosis",
    logoUrl: "/images/osmosis.png",
    chainId: "osmosis-1",
  },
  {
    chainName: "milky-way",
    logoUrl: "/images/milkyway.png",
    chainId: "milkyway-1",
  },
];

export const DUMMY_CONNECTION_CHAIN_LIST: ConnectionChainEntity[] = [
  {
    chainName: "cosmos-hub",
    logoUrl: "/images/cosmos.png",
    chainId: "cosmoshub-4",
    clientId: "cosmoshub-4",
    status: "WARNING",
  },
  {
    chainName: "osmosis",
    logoUrl: "/images/osmosis.png",
    chainId: "osmosis-1",
    clientId: "osmosis-1",
    status: "ACTIVE",
  },
  {
    chainName: "milky-way",
    logoUrl: "/images/milkyway.png",
    chainId: "milkyway-1",
    clientId: "milkyway-1",
    status: "ERROR",
  },
];
