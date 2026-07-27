import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "trojan",
  name: "Trojan",
  description:
    "Trojan's Terminal is a high-performance, intuitive crypto trading platform.",
  defiLlamaId: "trojan",
  links: {
    website: "https://trojan.com/",
    documentation: "https://docs.trojan.com/",
    twitter: "https://x.com/TrojanOnSolana",
    discord: "https://discord.gg/trojan",
    telegram: "https://t.me/trojan",
  },
  tags: ["dex"],
  addedAt: 1768316327000,
};

export const contracts: ContractRaw[] = [
  { name: "Trade", address: "troyXT7Ty3s2rjJe4bqWaroUrS4Fjd8rbHHNHxcACF4" },
];
