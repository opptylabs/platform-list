import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "glow",
  name: "Glow",
  description:
    "Glow Finance is a DeFi protocol offering lending, borrowing, and yield optimization strategies.",
  tags: ["dapp", "defi", "lending", "restaking"],
  links: {
    website: "https://app.glowfinance.xyz/",
    twitter: "https://x.com/glowfinancexyz",
    discord: "https://discord.gg/glowfinance",
  },
};

export const contracts: ContractRaw[] = [
  { name: "Markets", address: "GLoWMgcn3VbyFKiC2FGMgfKxYSyTJS7uKFwKY2CSkq9X" },
  {
    name: "Glow Liquid Restaking",
    address: "LRtc6q4AhSr3k9dSLXpTRoAP1hBrgbQSiFkuQpuHaq3",
  },
];
