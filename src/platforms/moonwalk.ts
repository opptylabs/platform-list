import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "moonwalk",
  name: "Moonwalk",
  description:
    "Moonwalk is a move-to-earn fitness app that rewards users with crypto for achieving step goals through gamified challenges and competitions.",
  links: {
    website: "https://app.moonwalk.fit/",
    discord: "https://discord.com/invite/jBhgHWUJ9U",
    telegram: "https://t.me/+x0hEQqQP1GpjZGZh",
    twitter: "https://x.com/moonwalkfitness",
    documentation: "https://moonwalk.fit/faq",
  },
  tags: ["fitness"],
  platformToken: "moonThZEkkTVoNB7v6YVCQiT56JYDZ1oN185ba3WizL",
};

export const contracts: ContractRaw[] = [
  { name: "Game", address: "FitAFk15vtx2PBjfr7QTnefaHRx6HwajRiZMt1DdSSKU" },
];
