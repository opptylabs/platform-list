import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "neutral",
  name: "Neutral",
  description: "Hedge fund strategies for everyone.",
  defiLlamaId: "neutral-trade",
  links: {
    website: "https://www.app.neutral.trade/",
    discord: "https://discord.gg/neutraltrade",
    telegram: "https://t.me/neutraltrade/",
    twitter: "https://x.com/TradeNeutral",
    medium: "https://neutraltrade.medium.com/",
    documentation: "https://docs.neutral.trade/",
  },
  tags: ["vault"],
};

export const contracts: ContractRaw[] = [
  { name: "Bundle", address: "BUNDDh4P5XviMm1f3gCvnq2qKx6TGosAGnoUK12e7cXU" },
  {
    name: "Neutral Vaults",
    address: "9Fcn3Fd4d5ocrb12xCUtEvezxcjFEAyHBPfrZDiPt9Qj",
  },
  {
    name: "Neutral Vaults",
    address: "EuSLjg23BrtwYAk1t4TFe5ArYSXCVXLBqrHRBfWQiTeJ",
  },
  {
    name: "Neutral Vaults",
    address: "BVddkVtFJLCihbVrtLo8e3iEd9NftuLunaznAxFFW8vf",
  },
];
