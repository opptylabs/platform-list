import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "haven",
  name: "Haven",
  description:
    "Haven is an automated leverage management platform powered by Solauto for self-rebalancing positions.",
  tags: ["vault"],
  links: {
    website: "https://haven.trade/",
    twitter: "https://x.com/haven_fi",
    discord: "https://discord.gg/DxJyNp5mS4",
    github: "https://github.com/haven-fi/solauto",
    telegram: "https://t.me/haven_fi",
  },
};

export const contracts: ContractRaw[] = [
  { name: "Leverage", address: "AutoyKBRaHSBHy9RsmXCZMy6nNFAg5FYijrvZyQcNLV" },
];
