import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "wink",
  name: "Wink (Only1)",
  description:
    "Wink is a decentralized social media platform that allows users to create and share content, connect with others, and earn rewards for their contributions.",
  links: {
    website: "https://w.ink/",
    discord: "https://discord.gg/Dp5P9X4tbU",
    telegram: "https://t.me/trywink",
    twitter: "https://x.com/try_wink",
  },
  platformToken: "3bRTivrVsitbmCTGtqwp7hxXPsybkjn4XLNtPsHqa3zR",
  tags: ["social"],
};

export const contracts: ContractRaw[] = [
  { name: "Service", address: "CDfyUBS8ZuL1L3kEy6mHVyAx1s9E97KNAwTfMfvhCriN" },
];
