import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "oreblue",
  name: "ZORB",
  description:
    "ZORB is a proof-of-work mining platform, a variant of the ORE mining ecosystem.",
  tags: ["tool"],
  links: {
    website: "https://zorb.supply/",
    discord: "https://discord.com/invite/69uxav4fe4",
    twitter: "https://x.com/ZORBsupply",
    documentation: "https://zorb.supply/about",
  },
  platformToken: "orebyr4mDiPDVgnfqvF5xiu5gKnh94Szuz8dqgNqdJn",
  addedAt: 1764072000000,
};

export const contracts: ContractRaw[] = [
  { name: "V3", address: "boreXQWsKpsJz5RR9BMtN8Vk4ndAk23sutj8spWYhwk" },
];
