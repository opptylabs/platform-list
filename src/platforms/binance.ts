import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "binance",
  name: "Binance",
  description:
    "Binance is a cryptocurrency exchange offering spot, futures, and derivatives trading along with staking and lending services.",
  links: {
    website: "https://www.binance.com/",
    twitter: "https://x.com/binance",
  },
  tags: ["cex"],
};

export const contracts: ContractRaw[] = [
  {
    name: "Binance Alpha 2.0",
    address: "BN111TK638zTi7uSXCKkzXYPSRt3rKNSDBK6VsjS772b",
  },
];
