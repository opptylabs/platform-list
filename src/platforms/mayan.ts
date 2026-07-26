import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "mayan",
  name: "Mayan",
  description:
    "Composable, auction-driven transfers that optimize speed and cost for a seamless multichain experience.",
  links: {
    website: "https://mayan.finance/",
    discord: "https://discord.gg/mayanfinance",
    documentation: "https://docs.mayan.finance/",
  },
  tags: ["bridge", "tool", "dapp"],
};

export const contracts: ContractRaw[] = [
  { name: "Swift", address: "BLZRi6frs4X4DNLw56V4EXai1b6QVESN1BhHBTYM9VcY" },
];
