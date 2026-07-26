import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "solstice",
  name: "Solstice",
  tags: ["dapp", "stablecoin", "institutional", "defi"],
  defiLlamaId: "solstice-usx",
  links: {
    website: "https://solstice.finance/",
    twitter: "https://x.com/solsticefi",
    documentation: "https://docs.solstice.finance/",
  },
  tokens: [
    "6FrrzDk5mQARGc1TDYoyVnSyRdds1t4PbtohCD6p3tgG",
    "3ThdFZQKM6kRyVGLG48kaPg5TRMhYMKY1iCRa9xop1WC",
  ],
};

export const contracts: ContractRaw[] = [
  {
    name: "Yield Vault",
    address: "eUSXyKoZ6aGejYVbnp3wtWQ1E8zuokLAJPecPxxtgG3",
  },
  {
    name: "USX Just Earn",
    address: "JECcmzAWytxXQtMN3taGmAYhTK4CDEfwEGrzfMvVeGXm",
  },
  { name: "USX", address: "USXyiSTsPEWz55pSK7sZoUL79ntoVGQbaTDT57tH6bx" },
];
