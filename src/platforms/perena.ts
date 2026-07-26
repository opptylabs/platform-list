import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "perena",
  name: "Perena",
  description:
    "Perena is a stablecoin infrastructure protocol featuring Numéraire, an AMM designed for efficient stablecoin swaps with minimal slippage.",
  defiLlamaId: "perena",
  links: {
    website: "https://perena.org/",
    discord: "https://discord.com/invite/vaNnNBqXMt",
    telegram: "https://t.me/perena_community",
    twitter: "https://x.com/perena",
    documentation:
      "https://perena.notion.site/Product-Documentation-15fa37a29ca48060afd9cabb21b44d5c",
  },
  tags: ["dapp", "stablecoin"],
  tokens: ["star9agSpjiFe3M49B3RniVU4CMBBEK3Qnaqn3RGiFM"],
};

export const contracts: ContractRaw[] = [
  { name: "Perena", address: "NUMERUNsFCP3kuNmWZuXtm1AaQCPj9uw6Guv2Ekoi5P" },
  { name: "Perena", address: "save8RQVPMWNTzU18t3GBvBkN9hT7jsGjiCQ28FpD9H" },
];
