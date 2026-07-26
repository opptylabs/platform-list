import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "pancakeswap",
  name: "PancakeSwap",
  description:
    "PancakeSwap is a multi-chain DEX offering token swaps, liquidity provision, and yield farming across multiple networks.",
  defiLlamaId: "pancakeswap",
  links: {
    website: "https://solana.pancakeswap.finance/",
    twitter: "https://x.com/pancakeswap",
    discord: "https://discord.gg/pancakeswap",
    github: "https://github.com/pancakeswap/",
  },
  tags: ["dex", "dapp"],
  platformToken: "4qQeZ5LwSz6HuupUu8jCtgXyW1mYQcNbFAW1sWZp89HL",
};

export const contracts: ContractRaw[] = [
  {
    name: "PancakeSwap",
    address: "HpNfyc2Saw7RKkQd8nEL4khUcuPhQ7WwY1B2qjx8jxFq",
  },
];
