import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "metaplex",
  name: "Metaplex",
  description:
    "Metaplex is the NFT standard and infrastructure protocol for Solana, providing token metadata, compressed NFTs (Bubblegum), and Candy Machine for minting.",
  defiLlamaId: "metaplex",
  links: {
    website: "https://metaplex.com",
    discord: "https://discord.gg/metaplex",
    twitter: "https://x.com/metaplex",
    github: "https://github.com/metaplex-foundation",
    documentation: "https://www.metaplex.com/guides",
  },
  platformToken: "METAewgxyPbgwsseH8T16a39CQ5VyVxZi9zXiDPY18m",
  tags: ["infrastructure"],
};

export const contracts: ContractRaw[] = [
  {
    name: "Bubblegum",
    address: "BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY",
  },
  {
    name: "Token Metadata",
    address: "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s",
  },
  { name: "Core", address: "CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d" },
  {
    name: "Candy Machine V3",
    address: "CMAGAKJ67e9hRZgfC5SFTbZH8MgEmtqazKXjmkaJjWTJ",
  },
  {
    name: "Candy Machine V2",
    address: "cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ",
  },
];
