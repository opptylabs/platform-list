import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "pumpswap",
  name: "PumpSwap",
  description: "Swap tokens on Pump.",
  defiLlamaId: "pumpswap",
  parentId: "pumpfun",
  tags: ["dex"],
  links: {
    website: "https://swap.pump.fun/",
    telegram: "https://t.me/pumpfunsupport",
    twitter: "https://x.com/pumpfun",
  },
};

export const contracts: ContractRaw[] = [
  {
    name: "PumpSwap AMM",
    address: "pAMMBay6oceH9fJKBRHGP5D4bD4sWpmSwMn52FMfXEA",
  },
  { name: "Pump Fees", address: "pfeeUxB6jkeY1Hxd7CsFCAjcbHA9rWtchMGdZ6VojVZ" },
];
