import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "magiceden",
  name: "MagicEden",
  description: "The NFT Marketplace.",
  defiLlamaId: "magiceden",
  links: {
    website: "https://magiceden.io/solana",
    discord: "https://discord.gg/magiceden",
    twitter: "https://x.com/MagicEden",
    github: "https://github.com/magiceden",
    documentation: "https://community.magiceden.io/learn",
  },
  platformToken: "MEFNBXixkEbait3xn9bkm8WsJzXtVsaJEn4c8Sam21u",
  tags: ["nft-marketplace"],
};

export const contracts: ContractRaw[] = [
  {
    name: "MarketPlace V2",
    address: "M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K",
  },
  { name: "Staking", address: "veTbq5fF2HWYpgmkwjGKTYLVpY6miWYYmakML7R7LRf" },
  {
    name: "Auction V1",
    address: "EA15T2W45BJFm71XmB5VGcsiWGKZTNfnK6aCmE2Hb5eC",
  },
  {
    name: "Auction V2",
    address: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
  },
  { name: "CNFT", address: "M3mxk5W2tt27WGT7THox7PmgRDp4m6NEhL5xvxrBfS1" },
  {
    name: "Candy Machine",
    address: "CMZYPASGWeTz7RNGHaRJfCq2XQ5pYK6nDvVQxzkH51zb",
  },
  { name: "AMM", address: "mmm3XBJg5gk8XJxEKBvdgptZz6SgK4tXvn36sodowMc" },
  {
    name: "Magic Claim",
    address: "mcmexbLZHASMjxjARNvDhXnEQT8vMP4uWnBi1Et8RdX",
  },
  {
    name: "Magic Claim Distribution",
    address: "disGCfSiJKFigEphfou4PGHn1rukMfbs9cg9GpTM6oe",
  },
];
