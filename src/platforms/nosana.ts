import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "nosana",
  name: "Nosana",
  description:
    "Nosana is a decentralized GPU compute marketplace for AI inference workloads, connecting GPU providers with AI developers.",
  links: {
    website: "https://app.nosana.io/",
    discord: "http://discord.gg/nosana-ai",
    telegram: "http://t.me/NosanaCompute",
    twitter: "https://x.com/nosana_ai",
    github: "https://github.com/nosana-ci",
    documentation: "https://docs.nosana.com/",
  },
  tags: ["tool", "depin", "dapp", "ai"],
};

export const contracts: ContractRaw[] = [
  { name: "Staking", address: "nosScmHY2uR24Zh751PmGj9ww9QRNHewh9H59AfrTJE" },
];
