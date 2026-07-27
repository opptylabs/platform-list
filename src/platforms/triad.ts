import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "triad",
  name: "Triad",
  description:
    "Triad is a prediction markets platform for trading politics, crypto, sports & culture.",
  tags: ["prediction"],
  links: {
    website: "https://app.triadfi.co/",
    discord: "http://discord.gg/triadfi",
    telegram: "https://t.me/triad369",
    twitter: "https://x.com/triadmarkets",
    github: "https://github.com/triadxyz",
    documentation: "https://docs.triadfi.co/",
  },
  platformToken: "t3DohmswhKk94PPbPYwA6ZKACyY3y5kbcqeQerAJjmV",
};

export const contracts: ContractRaw[] = [
  {
    name: "Prediction Market",
    address: "TRDwq3BN4mP3m9KsuNUWSN6QDff93VKGSwE95Jbr9Ss",
  },
];
