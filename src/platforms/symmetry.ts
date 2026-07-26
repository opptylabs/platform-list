import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "symmetry",
  name: "Symmetry",
  description:
    "Symmetry is an on-chain asset management protocol enabling creation and management of token baskets, indices, and actively managed funds.",
  defiLlamaId: "symmetry",
  links: {
    website: "https://www.symmetry.fi/",
    discord: "http://discord.gg/ahdqBRgE7G",
    telegram: "https://t.me/symmetry_fi",
    twitter: "https://x.com/symmetry_fi",
    github: "https://github.com/symmetry-protocol",
    medium: "https://symmetry-fi.medium.com/",
    documentation: "https://docs.symmetry.fi/",
  },
  tags: ["dapp", "defi", "vault"],
};

export const contracts: ContractRaw[] = [
  {
    name: "Symmetry V2",
    address: "2KehYt3KsEQR53jYcxjbQp2d2kCp4AkuQW68atufRwSr",
  },
  {
    name: "Symmetry V3",
    address: "BASKT7aKd8n7ibpUbwLP3Wiyxyi3yoiXsxBk4Hpumate",
  },
];
