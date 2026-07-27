import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "sns",
  name: "SNS",
  description: "Web3 Identity for Everyone",
  defiLlamaId: "solana-name-service",
  tags: ["social"],
  links: {
    website: "https://www.sns.id/",
    discord: "https://discord.com/invite/bonfida-778660171265474572",
    telegram: "https://t.me/snsdotsol",
    twitter: "https://x.com/sns",
    github: "https://github.com/Bonfida",
    documentation: "https://docs.sns.id/collection",
  },
  platformToken: "SNS8DJbHc34nKySHVhLGMUUE72ho6igvJaxtq9T3cX3",
  tokens: ["EchesyfXePKdLtoiZSL8pBe8Myagyy8ZRqsACNCFGnvp"],
};

export const contracts: ContractRaw[] = [
  {
    name: "Name Service",
    address: "namesLPneVptA9Z5rqUDD9tMTWEJwofgaYwp8cawRkX",
  },
  { name: "Registrar", address: "jCebN34bUfdeUYJT13J1yG16XWQpt5PDx6Mse9GUqhR" },
  {
    name: "Records Program",
    address: "HP3D4D1ZCmohQGFVms2SS4LCANgJyksBf5s1F77FuFjZ",
  },
  { name: "Airdrop", address: "bMersFdXPWiRzjqmbviCRMvwvN1FpRmATaqrF894CbU" },
  { name: "Offer", address: "85iDfUvr3HJyLM2zcq5BXSiDvUWfw6cSE1FfNBo8Ap29" },
];
