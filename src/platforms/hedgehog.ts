import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "hedgehog",
  name: "Hedgehog Markets",
  description:
    "Hedgehog Markets is a prediction markets platform for betting on real-world events and outcomes.",
  defiLlamaId: "hedgehog-markets",
  links: {
    website: "https://hedgehog.markets",
    discord: "http://discord.gg/2KusaG9wH7",
    twitter: "https://x.com/HedgehogMarket",
    github: "https://github.com/Hedgehog-Markets",
    medium: "https://hedgehogmarkets.substack.com/",
  },
  tags: ["dapp", "prediction", "defi"],
};

export const contracts: ContractRaw[] = [
  { name: "AMM", address: "Hr4whNgXr3yZsJvx3TVSwfsFgXuSEPB1xKmvgrtLhsrM" },
  { name: "Swap", address: "2ZznCMfx2XP43zaPw9R9wKnjXWiEeEexyhdBPv3UqDtD" },
  { name: "Tokens", address: "D8vMVKonxkbBtAXAxBwPPWyTfon8337ARJmHvwtsF98G" },
];
