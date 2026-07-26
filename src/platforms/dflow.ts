import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "dflow",
  name: "DFlow",
  description:
    "DFlow is a low-latency DEX aggregator using on-chain data for millisecond price calculations across AMMs, CLMMs, and CLOBs.",
  links: {
    website: "https://dflow.net/",
    discord: "https://discord.gg/dflow",
    twitter: "https://x.com/dflow",
  },
  defiLlamaId: "dflow",
  tags: ["dapp", "dex", "prediction"],
};

export const contracts: ContractRaw[] = [
  {
    name: "Aggregator",
    address: "DF1ow4tspfHX9JwWJsAb9epbkA8hmpSEAtxXy1V27QBH",
  },
  {
    name: "Predictions",
    address: "pReDicTmksnPfkfiz33ndSdbe2dY43KYPg4U2dbvHvb",
  },
];
