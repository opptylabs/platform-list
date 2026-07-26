import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "backwoods",
  name: "Backwoods",
  description:
    "Backwoods is a roguelite game featuring procedural dungeons and on-chain rewards.",
  links: {
    website: "https://backwoods.gg/",
    twitter: "https://x.com/TheBackwoodsSol",
    discord: "https://discord.gg/backwoodsgg",
    documentation: "https://backwoods.gg/#",
  },
  tags: ["gaming"],
};

export const contracts: ContractRaw[] = [
  { name: "Game", address: "H5RnrnQFVYiGCsGomawwyZ1gJgmMsSXDYbpidZredcGZ" },
];
