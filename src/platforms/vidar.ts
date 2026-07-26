import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "vidar",
  name: "Vidar",
  links: {
    website: "https://www.vidar.finance/dashboard",
  },
  tokens: [
    "K3UfGb8Cr6g2K4GKFEQFxHRhUMq9E9tb3vWepCf1jUp",
    "7V2ZDLCxZPvx5m5cuexseBHWBMkpj3rfLMuPsuVkecDA",
  ],
  tags: ["dapp"],
};

export const contracts: ContractRaw[] = [
  {
    name: "LJUP Minter",
    address: "1juPgnkY3i9dGkcuZahmby3exN4qpoq5HZ7rKKZsKtA",
  },
  {
    name: "wNOK Minter",
    address: "sta1L8xffHa3K1puWcTX1m4QWHek4Gs8PJZQtGEFwmX",
  },
  {
    name: "SafeLaunch",
    address: "SAFEuracFxm3sZfhUNtComzcyS4RTkcNccbkWWb4PH5",
  },
  {
    name: "BGLD Staking",
    address: "BStkNZqnbLCmZWs52BcJVNiG3XMwoiS1DuwnGg4ZQrrC",
  },
  {
    name: "BGLD Miner",
    address: "BGLDbLHXzZEKvZX2PAkvSChWtZYySZ16Drj6NX247AfY",
  },
];
