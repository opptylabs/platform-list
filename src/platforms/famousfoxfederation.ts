import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "famousfoxfederation",
  name: "Famous Fox Federation",
  description:
    "Famous Fox Federation is a 7,777 NFT collection with staking for FOXY rewards, missions, breeding mechanics, and DAO governance.",
  links: {
    website: "https://famousfoxes.com",
    discord: "https://discord.com/invite/famousfoxes",
    twitter: "https://x.com/famousfoxfed",
  },
  platformToken: "FoXyMu5xwXre7zEoSvzViRk3nGawHUp9kUh97y2NDhcq",
  tags: ["nft-collection", "dapp"],
};

export const contracts: ContractRaw[] = [
  { name: "Staking", address: "FoXpJL1exLBJgHVvdSHNKyKu2xX2uatctH9qp6dLmfpP" },
  { name: "Main", address: "JUicemrQ1X9XizUh1Pcn1SMJoArP8udtEqG5vZiWvkz" },
  { name: "Missions", address: "6NcdQ5WTnrPoMLbP4kvpLYa4YSwKqkNHRRE8XVf5hmv9" },
];
