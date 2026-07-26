import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "titan",
  name: "Titan",
  description: "Titan is a decentralized exchange and liquidity aggregator.",
  defiLlamaId: "titan-exchange",
  links: {
    website: "https://titan.exchange/",
    twitter: "https://x.com/Titan_Exchange",
    discord: "https://discord.gg/titanexchange",
    telegram: "https://t.me/TitanDexSol",
    documentation: "https://titandex.gitbook.io/titan",
  },
  tags: ["tool", "dapp", "dex", "defi"],
};

export const contracts: ContractRaw[] = [
  { name: "Swap", address: "T1TANpTeScyeqVzzgNViGDNrkQ6qHz9KrSBS4aNXvGT" },
  {
    name: "Limit Order",
    address: "TitanLozLMhczcwrioEguG2aAmiATAPXdYpBg3DbeKK",
  },
];
