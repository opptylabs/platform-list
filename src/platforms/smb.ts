import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "smb",
  name: "Solana Monkey Business",
  description: "Solana Monkey Business NFT collection and marketplace",
  links: {
    twitter: "https://x.com/MonkeDAO",
    website: "https://monkedao.io/",
    discord: "https://discord.gg/monkedao",
  },
  tags: ["nft-collection"],
};

export const contracts: ContractRaw[] = [
  {
    name: "Marketplace",
    address: "J7RagMKwSD5zJSbRQZU56ypHUtux8LRDkUpAPSKH4WPp",
  },
];
