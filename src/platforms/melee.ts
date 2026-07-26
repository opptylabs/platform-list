import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "melee",
  name: "Melee",
  description:
    "Melee is a prediction market platform offering leveraged bets on real-world events with high potential returns.",
  links: {
    website: "https://alpha.melee.markets/",
    telegram: "https://t.me/meleealpha",
    twitter: "https://x.com/meleemarkets",
    documentation: "https://melee-1.gitbook.io/melee-docs",
  },
  tags: ["dapp", "prediction", "defi"],
};

export const contracts: ContractRaw[] = [
  {
    name: "Prediction",
    address: "HK4ai9cQNxF9Btu2aUXNiqGLKF88p3ep2cVEtYo7uK4m",
  },
];
