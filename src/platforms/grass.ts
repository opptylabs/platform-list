import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "grass",
  name: "Grass",
  description:
    "Grass is a DePIN protocol that allows users to share unused internet bandwidth for AI data collection, earning rewards through network participation.",
  links: {
    website: "https://www.grass.io/",
    discord: "https://discord.com/invite/getgrass",
    twitter: "https://x.com/grass",
    documentation: "https://grass-foundation.gitbook.io/grass-docs",
  },
  platformToken: "Grass7B4RdKfBCjTKgSqnXkqjwiGvQyFbuSCUJr3XXjs",
  tags: ["depin"],
};

export const contracts: ContractRaw[] = [
  { name: "Staking", address: "EyxPPowqBRTpZpiDb2ixUR6XUU1VJwTCNgJdK8eyc6kc" },
  { name: "Airdrop", address: "Eohp5jrnGQgP74oD7ij9EuCSYnQDLLHgsuAmtSTuxABk" },
];
