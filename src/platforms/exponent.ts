import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "exponent",
  name: "Exponent",
  description:
    "Exponent is a yield exchange allowing users to choose between fixed or leveraged DeFi yields.",
  defiLlamaId: "exponent",
  links: {
    website: "https://www.exponent.finance",
    telegram: "https://t.me/exponentcitizens",
    twitter: "https://x.com/exponentfinance",
    github: "https://github.com/exponent-finance",
    documentation: "https://docs.exponent.finance/",
  },
  tags: ["dapp", "defi", "vault"],
};

export const contracts: ContractRaw[] = [
  { name: "Core", address: "ExponentnaRg3CQbW6dqQNZKXp7gtZ9DGMp1cwC4HAS7" },
  { name: "V2", address: "XPC1MM4dYACDfykNuXYZ5una2DsMDWL24CrYubCvarC" },
  { name: "Vaults", address: "sVau1tXvayVWfotzm9Ahcv2qfnnfRWttt78BCnNC6dD" },
];
