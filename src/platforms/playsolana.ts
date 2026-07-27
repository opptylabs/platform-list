import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "playsolana",
  name: "PlaySolana",
  description:
    "PlaySolana is a gaming platform offering play-to-earn games and NFT rewards.",
  tags: ["gaming"],
  links: {
    website: "https://www.playsolana.com/",
    discord: "https://discord.com/invite/playsolanaofficial",
    twitter: "https://www.x.com/playsolana",
  },
  platformToken: "PLAYs3GSSadH2q2JLS7djp7yzeT75NK78XgrE5YLrfq",
};

export const contracts: ContractRaw[] = [
  { name: "Main", address: "EdvEewANQTdsEco8dKUgCcYA6ZBTen7bP4rwCZjXKJAA" },
];
