import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "chopcorp",
  name: "Chopcorp",
  description: "LOG is a digital commodity on the Solana blockchain.",
  tags: ["memecoin"],
  defiLlamaId: "chopcorp",
  links: {
    website: "https://chopcorp.io/",
    discord: "https://discord.gg/fCNHMaYE7v",
    twitter: "https://x.com/Chopcorpsol",
    documentation: "https://chopcorp.io/about",
  },
  addedAt: 1767606188000,
  platformToken: "1ogCsoK7ZqZwiYam9i7xq2j6Bf2LizT6iQtGSp6vCoT",
};

export const contracts: ContractRaw[] = [
  { name: "V3", address: "chopmfFa3T1CzZj9WUgq5e18aMvjufSHGfPTvyKkydL" },
];
