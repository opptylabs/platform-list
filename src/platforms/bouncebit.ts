import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "bouncebit",
  name: "BounceBit",
  description:
    "BounceBit is a CeDeFi platform offering multi-chain institutional yield strategies for BTC, ETH, SOL, and stablecoins through centralized-decentralized hybrid finance.",
  defiLlamaId: "bouncebit",
  tags: ["vault"],
  links: {
    website: "https://portal.bouncebit.io",
    twitter: "https://x.com/bouncebit",
    discord: "https://discord.gg/bouncebit",
    telegram: "https://t.me/bouncebit_io",
    medium: "https://medium.com/@bouncebit",
    documentation: "https://docs.bouncebit.io/",
  },
};

export const contracts: ContractRaw[] = [
  {
    name: "CeDeFi v2",
    address: "65YBWQitcBexwuaBKfAV163xDd4LzVAdytATLbttpgxx",
  },
  { name: "Rewards", address: "5DBxQ4KRKgpCEp46fSs2RG4uoZ5totahCLyjmnn6tKRg" },
  { name: "Promo", address: "5HRzz8VDD9QjpEBBdq6hBUEXcssxW5mPnod4L6Qgnh9g" },
];
