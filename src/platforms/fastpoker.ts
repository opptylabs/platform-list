import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "fastpoker",
  name: "FastPoker",
  description: "Fully on-chain, permissionless poker platform on Solana.",
  links: {
    website: "https://fast.poker/",
    twitter: "https://x.com/FastdotPoker",
  },
  platformToken: "FP111dxqjLRqtuoknQ8L6aaZjqqyFRT6FcAnaCPytJ3",
  tags: ["gaming"],
  addedAt: 1749600000000,
};

export const contracts: ContractRaw[] = [
  { name: "FastPoker", address: "PokerXYdXL2SKNnfGbv1WE7vJHipTpNsfZbZeVvoJLn" },
  { name: "Rewards", address: "FASTPjXb68fPW9JRYSBS3EDoaT6inz84GoqkPK52dsA9" },
];
