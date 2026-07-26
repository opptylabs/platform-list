import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "degods",
  name: "DeGods",
  description:
    "DeGods is a collection of 10,000 unique avatar NFTs and a global community of creators and innovators, integrated with the DUST and DEGOD token ecosystem.",
  links: {
    twitter: "https://x.com/DeGodsNFT",
    website: "https://degods.com/",
    discord: "https://discord.com/invite/dexyz",
  },
  tags: ["nft-collection"],
  platformToken: "DUSTawucrTsGU8hcqRdHDCbuYhCPADMLM2VcCb8VnFnQ",
};

export const contracts: ContractRaw[] = [
  { name: "GEM Farm", address: "FQzYycoqRjmZTgCcTTAkzceH2Ju8nzNLa5d78K3yAhVW" },
  { name: "GEM Bank", address: "6VJpeYFy87Wuv4KvwqD5gyFBTkohqZTqs6LgbCJ8tDBA" },
];
