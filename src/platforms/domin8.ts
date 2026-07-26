import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "domin8",
  name: "Domin8",
  description: "On-chain gaming platform on Solana",
  links: {
    website: "https://www.domin8.fun/",
    twitter: "https://x.com/domin8Arena",
  },
  tags: ["gaming", "dapp"],
};

export const contracts: ContractRaw[] = [
  { name: "Game", address: "7bHYHZVu7kWRU4xf7DWypCvefWvuDqW1CqVfsuwdGiR7" },
];
