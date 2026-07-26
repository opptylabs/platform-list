import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "reflex",
  name: "Reflex",
  description:
    "Pump.fun staking protocol that redirects creator fees to token holders as SOL rewards.",
  platformToken: "9vmTRY3SwAx54JpRd3kLbPrxxuX7xkyjg5Ug14aBpump",
  tags: ["dapp", "defi"],
  addedAt: 1738281600000,
  links: {
    website: "https://rflx.fi/",
    twitter: "https://x.com/rflx_fi",
    github: "https://github.com/reflexfi",
    documentation: "https://rflx.fi/faq/",
  },
};

export const contracts: ContractRaw[] = [
  { name: "Staking", address: "7mSqZcYPUGm99M6sGpNRHjorbB1NPF3ThyTpEjhkKzKF" },
];
