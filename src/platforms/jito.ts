import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "jito",
  name: "Jito",
  description: "Earn MEV rewards through Jito's Solana Liquid Staking pool.",
  defiLlamaId: "jito",
  links: {
    website: "https://jito.network/",
    discord: "https://discord.gg/jito",
    twitter: "https://x.com/jito_sol",
    github: "https://github.com/jito-foundation",
    medium: "https://medium.com/@Jito-Foundation",
    documentation: "https://www.jito.network/docs/jitosol/overview/",
  },
  platformToken: "jtojtomepa8beP8AuQc6eXt5FriJwfFMwQx2v2f9mCL",
  tokens: ["J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn"],
  tags: ["lst", "infrastructure", "dapp", "defi", "restaking"],
};

export const contracts: ContractRaw[] = [
  {
    name: "Governance",
    address: "jtogvBNH3WBSWDYD5FJfQP2ZxNTuf82zL8GkEhPeaJx",
  },
  { name: "Restaking", address: "Vau1t6sLNxnzB7ZDsef8TLbPLfyZMYXH8WTNqUdm9g8" },
  { name: "Airdrop", address: "mERKcfxMC5SqJn4Ld4BUris3WKZZ1ojjWJ3A3J5CKxv" },
];
