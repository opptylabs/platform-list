import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "glam",
  name: "GLAM",
  description:
    "GLAM is a vault and tokenization protocol on Solana providing programmable infrastructure with onchain policies and access controls.",
  links: {
    website: "https://www.glam.systems/",
    twitter: "https://x.com/glamsystems",
    github: "https://github.com/glamsystems/",
    documentation: "https://docs.glam.systems/",
  },
  tags: ["defi", "vault", "rwa", "infrastructure"],
  addedAt: 1770984000000,
};

export const contracts: ContractRaw[] = [
  { name: "Protocol", address: "GLAMpaME8wdTEzxtiYEAa5yD8fZbxZiz2hNtV58RZiEz" },
  { name: "Mint", address: "GM1NtvvnSXUptTrMCqbogAdZJydZSNv98DoU5AZVLmGh" },
  {
    name: "CCTP Integration",
    address: "G1NTcMDYgNLpDwgnrpSZvoSKQuR9NXG7S3DmtNQCDmrK",
  },
  {
    name: "Drift Integration",
    address: "G1NTdrBmBpW43msRQmsf7qXSw3MFBNaqJcAkGiRmRq2F",
  },
  {
    name: "Kamino Integration",
    address: "G1NTkDEUR3pkEqGCKZtmtmVzCUEdYa86pezHkwYbLyde",
  },
  {
    name: "SPL Integration",
    address: "G1NTsQ36mjPe89HtPYqxKsjY5HmYsDR6CbD2gd2U2pta",
  },
];
