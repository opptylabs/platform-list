import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "pumpfun",
  name: "Pumpfun",
  description:
    "Pump.fun is a memecoin launchpad that enables anyone to create and trade tokens with bonding curve mechanics and automatic liquidity migration to Raydium.",
  defiLlamaId: "pumpfun",
  tags: ["memecoin", "launchpad", "dapp"],
  links: {
    website: "https://pump.fun/board",
    telegram: "https://t.me/pumpfunsupport",
    twitter: "https://x.com/pumpfun",
  },
  platformToken: "pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn",
};

export const contracts: ContractRaw[] = [
  { name: "Launchpad", address: "6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P" },
];
