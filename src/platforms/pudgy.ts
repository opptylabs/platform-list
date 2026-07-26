import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "pudgy",
  name: "Pudgy Penguins",
  description: "Pudgy Penguins NFT collection on Solana",
  links: {
    website: "https://pudgypenguins.com/",
    discord: "https://discord.gg/pudgypenguins",
    twitter: "https://x.com/pudgypenguins",
  },
  tags: ["nft-collection"],
  platformToken: "2zMMhcVQEXDtdE6vsFS7S7D5oUodfJHE8vd1gnBouauv",
};

export const contracts: ContractRaw[] = [
  { name: "Airdrop", address: "CUEB3rQGVrvCRTmyjLrPnsd6bBBsGbz1Sr49vxNLJkGR" },
];
