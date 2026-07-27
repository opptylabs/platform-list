import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "zelo",
  name: "Zelo Finance",
  description: "Solana's Lossless Lottery Savings Protocol ",
  links: {
    website: "https://www.zelofi.io/",
    discord: "https://discord.gg/blocksmithlabs",
    twitter: "https://x.com/zelofinance",
    github: "https://github.com/Blocksmith-Labs",
    documentation: "https://blocksmithlabs-1.gitbook.io/zelo-docs",
  },
  tags: ["gaming"],
};

export const contracts: ContractRaw[] = [
  { name: "Staking", address: "3weDTR2PBop8SoYXpQEhdRCA9Wr2JK7gj3CxuUbMo2VJ" },
];
