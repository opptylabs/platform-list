import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "banger",
  name: "Banger",
  description:
    "Banger is a SocialFi platform for launching and trading tokens tied to tweets (tweetcoins).",
  tags: ["social", "dapp"],
  links: {
    website: "https://www.banger.lol/",
    documentation: "https://banger.gitbook.io/banger-docs",
  },
};

export const contracts: ContractRaw[] = [
  { name: "Launch", address: "BANGURqoS7pzE8MEtQrqxHPD9qYHfYdhCA7NVWPZvCtT" },
];
