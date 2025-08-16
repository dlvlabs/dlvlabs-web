import {
  ChainCounterparty,
  ChainEntity,
  ConnectionChainEntity,
} from "@/entities/chain/types";

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
    clientId: "07-tendermint-3364",
    status: "WARNING",
  },
  {
    chainName: "osmosis",
    logoUrl: "/images/osmosis.png",
    chainId: "osmosis-1",
    clientId: "07-tendermint-3364",
    status: "ACTIVE",
  },
  {
    chainName: "milky-way",
    logoUrl: "/images/milkyway.png",
    chainId: "milkyway-1",
    clientId: "07-tendermint-3364",
    status: "ERROR",
  },
];

export const DUMMY_CONNECTION_CHAIN_DETAIL: ChainCounterparty = {
  chainName: "cosmos-hub",
  chainId: "cosmoshub-4",
  clientId: "07-tendermint-3364",
  logoUrl: "/images/cosmos.png",
  connections: [
    {
      connectionId: "connection-2821",
      channelId: "channel-89298",
      status: "WARNING",
      problem: "6 consecutive ibc tx missed",
      sequence: 1234,
      portId: "transfer",
      latestIBCTx:
        "5AA7D65A234AE2B5609AB3FD920D38493968BBCB99492CDA3040BC58DA651820",
    },
    {
      connectionId: "connection-2822",
      channelId: "channel-89299",
      status: "ACTIVE",
      problem: "",
      portId: "transfer",
      sequence: 1235,
      latestIBCTx:
        "5AA7D65A234AE2B5609AB3FD920D38493968BBCB99492CDA3040BC58DA651821",
    },
    {
      connectionId: "connection-2823",
      channelId: "channel-89297",
      status: "ERROR",
      problem: "10 consecutive ibc tx missed",
      portId: "transfer",
      sequence: 1235,
      latestIBCTx:
        "5AA7D65A234AE2B5609AB3FD920D38493968BBCB99492CDA3040BC58DA651821",
    },
    // ...
  ],
};
