import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "wasabi",
  name: "Wasabi",
  description: "Automated trading vaults and perpetuals protocol on Solana",
  defiLlamaId: "wasabi",
  links: {
    website: "https://app.wasabi.xyz/",
    discord: "https://discord.gg/wZqzsfnvmh",
    twitter: "https://x.com/wasabi_protocol",
    documentation: "https://docs.wasabi.xyz/_/overview/what-is-wasabi",
  },
  tags: ["dapp", "trading", "vault", "defi"],
};

export const contracts: ContractRaw[] = [
  { name: "Main", address: "spicyTHtbmarmUxwFSHYpA8G4uP2nRNq38RReMpoZ9c" },
];
