import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "mysticdao",
  name: "Mystic DAO",
  description: "Mystic DAO is a gamified DeFi ecosystem on Solana.",
  links: {
    website: "https://mysticdao.io/",
    twitter: "https://x.com/MysticDAO",
  },
  tags: ["gaming"],
};

export const contracts: ContractRaw[] = [
  { name: "Main", address: "MYstiCRQrXvJAp3DGUdguaZjn7Zq1kwUYRe2sRK2RFY" },
];
