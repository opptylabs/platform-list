import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "reflect",
  name: "Reflect",
  description: "Autonomous money designed for the stablecoin era",
  links: {
    website: "https://www.reflect.money/",
    twitter: "https://x.com/reflectmoney",
    documentation: "https://docs.reflect.money/",
  },
  tags: ["stablecoin"],
  tokens: ["usd63SVWcKqLeyNHpmVhZGYAqfE5RHE8jwqjRA2ida2"],
};

export const contracts: ContractRaw[] = [
  {
    name: "USDC+ Mint",
    address: "rFLctqnUuxLmYsW5r9zNujfJx9hGpnP1csXr9PYwVgX",
  },
];
