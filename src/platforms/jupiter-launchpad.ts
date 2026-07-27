import { PlatformRaw, ContractRaw } from "../types";
import { platform as jupiterPlatform } from "./jupiter-exchange";
export const platform: PlatformRaw = {
  id: "jupiter-launchpad",
  name: "Jupiter Launchpad",
  description: "Ultimate decentralised distribution stack",
  links: {
    website: "https://lfg.jup.ag/",
  },
  parentId: jupiterPlatform.id,
  tags: ["launchpad"],
};

export const contracts: ContractRaw[] = [
  { name: "LFG", address: "DiSLRwcSFvtwvMWSs7ubBMvYRaYNYupa76ZSuYLe6D7j" },
  { name: "DTF", address: "presSVxnf9UU8jMxhgSMqaRwNiT36qeBdNeTRKjTdbj" },
];
