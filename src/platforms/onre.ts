import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "onre",
  name: "OnRe",
  description:
    "OnRe is a yield-bearing stablecoin protocol offering a dollar-pegged asset with built-in yield.",
  defiLlamaId: "onre",
  links: {
    website: "https://www.onre.finance/",
    twitter: "https://x.com/onrefinance",
    github: "https://github.com/onre-finance",
    telegram: "https://t.me/+mW8VqpLlFIExMmMx",
  },
  tags: ["stablecoin", "institutional"],
};

export const contracts: ContractRaw[] = [
  { name: "Deposit", address: "onreuGhHHgVzMWSkj2oQDLDtvvGvoepBPkqyaubFcwe" },
];
