import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "pumpkin",
  name: "Pumpkin",
  description: "Token Launch Hub",
  tags: ["dapp", "launchpad", "defi"],
  links: {
    website: "https://pumpkin.fun/",
    telegram: "https://t.me/pumpkindotfun",
    documentation: "https://pumpkindotfun.gitbook.io/",
    twitter: "https://x.com/pumpkindotfun",
  },
  platformToken: "2RBko3xoz56aH69isQMUpzZd9NYHahhwC23A5F3Spkin",
};

export const contracts: ContractRaw[] = [
  { name: "Staking", address: "ARFxpgenuFNbyoysFdqEwTgEdxtLtHbTHwCWHJjqWHTb" },
];
