import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "sharky",
  name: "Sharky",
  description:
    "Sharky is an escrowless NFT lending and borrowing protocol where users can borrow SOL against NFTs or lend SOL to earn yield.",
  defiLlamaId: "sharky",
  tags: ["lending"],
  links: {
    website: "https://sharky.fi/",
    discord: "https://discord.gg/sharkyfi",
    twitter: "https://x.com/SharkyFi",
    github: "https://github.com/SharkyFi",
  },
  platformToken: "SHARKSYJjqaNyxVfrpnBN9pjgkhwDhatnMyicWPnr1s",
};

export const contracts: ContractRaw[] = [
  { name: "Sharky", address: "SHARKobtfF1bHhxD2eqftjHBdVSCbKo9JtgK71FhELP" },
];
