import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "oresupply",
  name: "OreSupply",
  description:
    "ORE Supply is the original proof-of-work mining protocol enabling users to mine ORE tokens using computational puzzles.",
  defiLlamaId: "ore-protocol",
  tags: ["memecoin"],
  links: {
    website: "https://ore.supply/",
    discord: "https://discord.gg/4TQfshAAsT",
    twitter: "https://x.com/oresupply",
    github: "https://github.com/regolith-labs/ore",
    documentation: "https://ore.supply/mine",
  },
  platformToken: "oreoU2P8bN6jkk3jbaiVxYnG1dCXcYxwhwyK9jSybcp",
};

export const contracts: ContractRaw[] = [
  { name: "Mining", address: "poo1sKMYsZtDDS7og73L68etJQYyn6KXhXTLz1hizJc" },
  { name: "V1", address: "BoostzzkNfCA9D1qNuN5xZxB5ErbK4zQuBeTHGDpXT1" },
  { name: "V2", address: "oreV2ZymfyeXgNgBdqMkumTqqAprVqgBWQfoYkrtKWQ" },
  { name: "V3", address: "oreV3EG1i9BEgiAJ8b177Z2S2rMarzak4NMv1kULvWv" },
];
