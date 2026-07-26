import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "oro",
  name: "Oro",
  description:
    "Regulated tokenized gold protocol with yield-bearing tokens backed by physical gold",
  defiLlamaId: "oro-finance",
  links: {
    website: "https://app.oro.finance/",
    twitter: "https://x.com/orogoldapp",
  },
  tags: ["dapp", "rwa"],
  tokens: ["GoLDppdjB1vDTPSGxyMJFqdnj134yH6Prg9eqsGDiw6A"],
};

export const contracts: ContractRaw[] = [
  { name: "Staking", address: "stakeZZUzk2LgiiLqufNNyDQuUsn8UTzvCWBkWdYaRH" },
  { name: "Core", address: "iNtiXEFgDNrc6FUt4cFALDe3D8RF3sVnNuKSHwxZRop" },
];
