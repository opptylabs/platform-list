import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "stabble",
  name: "stabble",
  description: "Solana's first frictionless liquidity and trading layer",
  defiLlamaId: "stabble",
  tags: ["dapp", "defi"],
  links: {
    website: "https://app.stabble.org/",
    discord: "https://discord.com/invite/SfkybtttdC",
    telegram: "https://t.me/+XWwNwDja8Oo4M2Y8",
    twitter: "https://x.com/stabbleorg",
    github: "https://github.com/stabbleorg",
    documentation: "https://docs.stabble.org/",
  },
  platformToken: "STBuyENwJ1GP4yNZCjwavn92wYLEY3t5S1kVS5kwyS1",
};

export const contracts: ContractRaw[] = [
  {
    name: "Stable Pools",
    address: "swapNyd8XiQwJ6ianp9snpu4brUqFxadzvHebnAXjJZ",
  },
  {
    name: "Weighted Pools",
    address: "swapFpHZwjELNnjvThjajtiVmkz3yPQEHjLtka2fwHW",
  },
  {
    name: "LP Staking",
    address: "rev31KMq4qzt1y1iw926p694MHVVWT57caQrsHLFA4x",
  },
];
