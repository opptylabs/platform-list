import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "godl",
  name: "GODL",
  description:
    "GODL is a mineable token using proof-of-work mechanics, allowing users to mine tokens through computational puzzles.",
  tags: ["tool"],
  links: {
    website: "https://www.godl.supply/",
    discord: "https://discord.com/invite/BDmq4CZXWr",
    twitter: "https://x.com/GODLsupply",
    documentation: "https://www.godl.supply/about",
  },
  defiLlamaId: "godl-protocol",
  platformToken: "GodL6KZ9uuUoQwELggtVzQkKmU1LfqmDokPibPeDKkhF",
  addedAt: 1764244800000,
};

export const contracts: ContractRaw[] = [
  { name: "V3", address: "mineWsRs2Rmw2jPMkVbgAbDjV1E23yQ8TEodaX3iza4" },
];
