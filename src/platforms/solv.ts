import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "solv",
  name: "Solv",
  description: "Bitcoin liquid staking protocol on Solana",
  tags: ["bitcoin"],
  defiLlamaId: "solv-protocol",
  links: {
    website: "https://solv.finance/",
    twitter: "https://x.com/SolvProtocol",
    documentation: "https://docs.solv.finance/",
    github: "https://github.com/solv-finance",
  },
  tokens: [
    "soLvpPEDkN8D1Wgjezrb1oj4WjGtj17vynGm6t3jah6",
    "SoLvHDFVstC74Jr9eNLTDoG4goSUsn1RENmjNtFKZvW",
  ],
  addedAt: 1764158400000,
};

export const contracts: ContractRaw[] = [
  { name: "Main", address: "soLv1S6GsAEVEnXmVY3oz6GtrNJteQ28iTyRQrHXvkz" },
];
