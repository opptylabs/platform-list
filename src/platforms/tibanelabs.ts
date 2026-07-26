import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "tibanelabs",
  name: "Tibane Labs",
  description: "Open source tools and infrastructure on Solana.",
  links: {
    website: "https://www.tibane.net/",
    twitter: "https://x.com/TibaneLabs",
    github: "https://github.com/TibaneLabs",
  },
  tags: ["dapp"],
};

export const contracts: ContractRaw[] = [
  { name: "Staking", address: "3Ecf8gyRURyrBtGHS1XAVXyQik5PqgDch4VkxrH4ECcr" },
];
