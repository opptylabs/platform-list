import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "lince",
  name: "Lince",
  description:
    "Lince is a DeFi platform offering investment strategies tailored to user risk profiles through lending vaults.",
  links: {
    website: "https://lince.finance/",
    twitter: "https://x.com/LinceFinance",
    discord: "https://discord.gg/lincefinance",
    telegram: "https://t.me/LinceFinance",
  },
  tags: ["lending", "vault"],
  addedAt: 1757419200000,
};

export const contracts: ContractRaw[] = [
  { name: "Lince", address: "LnceiBjUxxjGbhFpKz3SoGo9ntPYwm1DC3wkEQhav9j" },
];
