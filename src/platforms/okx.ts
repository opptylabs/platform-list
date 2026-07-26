import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "okx",
  name: "OKX",
  description:
    "OKX DEX is a multi-chain aggregator finding optimal trading routes across 400+ DEXs and 30+ networks including Solana.",
  defiLlamaId: "okx",
  links: {
    website: "https://web3.okx.com/dex-swap/bridge",
    twitter: "https://x.com/wallet",
  },
  tags: ["dex"],
  tokens: ["CtzPWv73Sn1dMGVU3ZtLv9yWSyUAanBni19YWDaznnkn"],
};

export const contracts: ContractRaw[] = [
  {
    name: "Aggregator",
    address: "6m2CDdhRgxpH4WjvdzxAYbGxwdGUz5MziiL5jek2kBma",
  },
  {
    name: "Aggregator V6",
    address: "proVF4pMXVaYqmy4NjniPh4pqKNfMmsihgd4wdkCX3u",
  },
];
