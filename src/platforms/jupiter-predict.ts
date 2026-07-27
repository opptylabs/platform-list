import { PlatformRaw, ContractRaw } from "../types";
import { platform as jupiterPlatform } from "./jupiter-exchange";
export const platform: PlatformRaw = {
  id: "jupiter-predict",
  name: "Jupiter Predict",
  description: "Jupiter Prediction Market, trade on real-world events.",
  links: {
    website: "https://jup.ag/prediction",
    discord: "https://discord.gg/jup",
    twitter: "https://x.com/jup_predict",
    github: "https://github.com/jup-ag",
  },
  tags: ["prediction"],
  parentId: jupiterPlatform.id,
};

export const contracts: ContractRaw[] = [
  {
    name: "Prediction Market",
    address: "3ZZuTbwC6aJbvteyVxXUS7gtFYdf7AuXeitx6VyvjvUp",
  },
];
