import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "hawksight",
  name: "HawkFi",
  description:
    "HawkFi is an analytics and automation platform for liquidity providers, offering yield optimization strategies for concentrated liquidity positions.",
  defiLlamaId: "hawkfi",
  links: {
    website: "https://www.hawkfi.ag/",
    discord: "https://discord.gg/hawkfi",
    telegram: "https://t.me/hawkfi",
    twitter: "https://x.com/HawkFi_",
    documentation: "https://hawkfi.gitbook.io/whitepaper",
  },
  platformToken: "BKipkearSqAUdNKa1WDstvcMjoPsSKBuNyvKDQDDu9WE",
  tags: ["dapp", "defi", "tool"],
};

export const contracts: ContractRaw[] = [
  { name: "Main", address: "FqGg2Y1FNxMiGd51Q6UETixQWkF5fB92MysbYogRJb3P" },
];
