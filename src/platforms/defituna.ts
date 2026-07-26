import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "defituna",
  name: "DeFiTuna",
  description:
    "DeFiTuna is a DeFi platform offering leveraged concentrated liquidity positions up to 5x, lending pools, and an AMM with native limit orders.",
  links: {
    website: "https://defituna.com",
    discord: "https://discord.gg/vNWwVWbnzs",
    twitter: "https://x.com/DeFiTuna",
    documentation: "https://defituna.gitbook.io/defituna-docs",
  },
  defiLlamaId: "defituna",
  tags: ["dapp", "dex", "defi", "lending"],
  platformToken: "TUNAfXDZEdQizTMTh3uEvNvYqJmqFHZbEJt8joP4cyx",
};

export const contracts: ContractRaw[] = [
  { name: "DefiTuna", address: "tuna4uSQZncNeeiAMKbstuxA9CUkHH6HmC64wgmnogD" },
  { name: "Staking", address: "tUnst2Y2sbmgSgARBpSBZhqPzpoy2iUsdCwb5ToYVJa" },
  {
    name: "Fusion AMM",
    address: "fUSioN9YKKSa3CUC2YUc4tPkHJ5Y6XW1yz8y6F7qWz9",
  },
];
