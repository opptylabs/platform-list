import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "whalesmarket",
  name: "Whales Market",
  description:
    "Whales Market is a decentralized OTC trading platform for pre-TGE tokens and allocations, offering trustless P2P trading with smart contract-secured settlements, collateral locks, and on-chain transparency across multiple blockchain ecosystems.",
  defiLlamaId: "whales-market",
  links: {
    website: "https://app.whales.market/",
    discord: "https://discord.com/invite/whalesmarket",
    twitter: "https://x.com/WhalesMarket",
    github: "https://github.com/Whales-Market/",
    documentation: "https://docs.whales.market/",
  },
  platformToken: "GTH3wG3NErjwcf7VGCoXEXkgXSHvYhx5gtATeeM5JAS1",
  tokens: ["3wCoTb3TArUdzmeTBPzPFyPBUP6EJXaW5LAzGsWCpySu"],
  tags: ["dapp", "prediction", "trading", "defi"],
};

export const contracts: ContractRaw[] = [
  {
    name: "Prediction Market",
    address: "stPdYNaJNsV3ytS9Xtx4GXXXRcVqVS6x66ZFa26K39S",
  },
];
