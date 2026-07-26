import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "thevault",
  name: "The Vault",
  description: "Liquid staking protocol for Solana",
  defiLlamaId: "the-vault",
  links: {
    website: "https://thevault.finance/",
    discord: "https://discord.gg/aQC53CGgQY",
    twitter: "https://x.com/thevaultfinance",
    github: "https://github.com/SolanaVault",
    documentation: "https://docs.thevault.finance/",
  },
  tokens: ["vSoLxydx6akxyMD9XEcPvGYNGq6Nn66oqVb3UkGkei7"],
  tags: ["dapp", "lst"],
};

export const contracts: ContractRaw[] = [
  {
    name: "Unstake Pool",
    address: "2rU1oCHtQ7WJUvy15tKtFvxdYNNSc3id7AzUcjeFSddo",
  },
];
