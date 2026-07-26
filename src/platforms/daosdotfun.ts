import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "daosdotfun",
  name: "daos.fun",
  description:
    "launch an AI agent or DAO in 1-click alongside ai16z on Solana's biggest AI capital market.",
  links: {
    website: "https://www.daos.fun/",
    twitter: "https://x.com/daosdotfun",
    documentation: "https://www.daos.fun/playbook",
  },
  tags: ["launchpad"],
  addedAt: 1770897600000,
};

export const contracts: ContractRaw[] = [
  { name: "Coin", address: "4FqThZWv3QKWkSyXCDmATpWkpEiCHq5yhkdGWpSEDAZM" },
];
