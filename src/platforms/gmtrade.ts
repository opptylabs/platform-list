import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "gmtrade",
  name: "GMTrade",
  description:
    "GMTrade is a decentralized leveraged trading platform built on the Solana blockchain.",
  tags: ["perpetuals"],
  links: {
    website: "https://gmxsol.io/",
    discord: "https://discord.com/invite/gmtrade",
    twitter: "https://x.com/gmtrade_xyz",
    documentation: "https://docs.gmtrade.xyz/",
  },
  defiLlamaId: "gmtrade",
  addedAt: 1770897600000,
};

export const contracts: ContractRaw[] = [
  { name: "Trade", address: "Gmso1uvJnLbawvw7yezdfCDcPydwW2s2iqG3w6MDucLo" },
];
