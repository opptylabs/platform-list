import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "carrot",
  name: "Carrot",
  description:
    "Carrot is a yield-bearing stablecoin protocol that mints CRT tokens backed by yield-generating DeFi strategies.",
  defiLlamaId: "carrot",
  links: {
    website: "https://deficarrot.com/",
    twitter: "https://x.com/DeFiCarrot",
    discord: "https://discord.gg/carrot",
    documentation: "https://docs.deficarrot.com/",
  },
  tokens: [
    "CRTx1JouZhzSU6XytsE42UQraoGqiHgxabocVfARTy2s",
    "uWmCyJDELc3PyG5JQpRbA4UVa3ra2jRsk8wkdSTEz6W",
    "BxEHFUpAD9ffHPSPom1h4CAydRX5rwNBD5NVA1vfTqbn",
    "BXEjfmuDGSJxvUGqw1tdSnvpQYuMUGVgxYZLjUWPUcB9",
  ],
  tags: ["stablecoin", "dapp"],
};

export const contracts: ContractRaw[] = [
  { name: "Minter", address: "CarrotwivhMpDnm27EHmRLeQ683Z1PufuqEmBZvD282s" },
  { name: "Boost", address: "C73nDAFn23RYwiFa6vtHshSbcg8x6BLYjw3bERJ3vHxf" },
];
