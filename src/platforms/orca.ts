import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "orca",
  name: "Orca",
  description:
    "Orca is an AMM and concentrated liquidity DEX offering token swaps, Whirlpools for capital-efficient liquidity provision, and yield farming.",
  defiLlamaId: "orca",
  links: {
    website: "https://www.orca.so/",
    discord: "https://discord.orca.so/",
    twitter: "https://x.com/orca_so",
    github: "https://github.com/orca-so",
    medium: "https://orca-so.medium.com/",
    documentation: "https://docs.orca.so/",
  },
  platformToken: "orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE",
  tokens: ["xorcaYqbXUNz3474ubUMJAdu2xgPsew3rUCe5ughT3N"],
  tags: ["dex"],
};

export const contracts: ContractRaw[] = [
  {
    name: "Orca Pools",
    address: "9W959DqEETiGZocYWCQPaJ6sBmUzgfxXfqGeTEdp3aQP",
  },
  {
    name: "Orca Aqua Farms",
    address: "82yxjeMsvaURa4MbZZ7WZZHfobirZYkH1zF8fmeGtyaQ",
  },
  {
    name: "Orca Whirlpool",
    address: "whirLbMiicVdio4qvUfM5KAg6Ct8VwpYzGff3uctyCc",
  },
  {
    name: "Orca Staking",
    address: "StaKE6XNKVVhG8Qu9hDJBqCW3eRe7MDGLz17nJZetLT",
  },
];
