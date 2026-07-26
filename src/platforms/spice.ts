import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "spice",
  name: "Spice",
  description:
    "Token for Governance & Currency in the Lowlife Forms Gameverse.",
  links: {
    website: "https://staking.spicecoin.com/",
    twitter: "https://x.com/spiceonsol",
  },
  tags: ["dapp", "gaming"],
};

export const contracts: ContractRaw[] = [
  { name: "Staking", address: "DQtwoVmEgaGe3hCuefpnBR1rjtLJLJ7sKjVZbUEsSseC" },
];
