import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "hastra",
  name: "Hastra",
  description:
    "Hastra is a DeFi protocol offering vault-based staking and minting services.",
  tags: ["institutional"],
  links: {
    website: "https://www.hastra.io/",
    twitter: "https://x.com/HastraFi",
  },
  addedAt: 1764936000000,
  tokens: ["3b8X44fLF9ooXaUm3hhSgjpmVs6rZZ3pPoGnGahc3Uu7"],
};

export const contracts: ContractRaw[] = [
  {
    name: "Vault Mint",
    address: "9WUyNREiPDMgwMh5Gt81Fd3JpiCKxpjZ5Dpq9Bo1RhMV",
  },
  {
    name: "Vault Stake",
    address: "97V7JsExNC6yFWu5KjK1FLfVkNVvtMpAFL5QkLWKEGxY",
  },
];
