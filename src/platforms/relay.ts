import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "relay",
  name: "Relay",
  description:
    "Relay is a cross-chain payments protocol enabling instant, low-cost bridging and transactions across multiple blockchains through a permissionless relayer network.",
  links: {
    website: "https://relay.link/bridge",
    twitter: "https://x.com/relayprotocol",
    github: "https://github.com/reservoirprotocol",
    documentation: "https://docs.relay.link/what-is-relay",
  },
  tags: ["dapp", "bridge"],
};

export const contracts: ContractRaw[] = [
  {
    name: "WSOL Unwrapper",
    address: "DzACDmwdqc5ADPJKnZEcQAgpsPdvYzvYBMihPNN48pFE",
  },
  {
    name: "Relay Bridge",
    address: "99vQwtBwYtrqqD9YSXbdum3KBdxPAVxYTaQ3cfnJSrN2",
  },
];
