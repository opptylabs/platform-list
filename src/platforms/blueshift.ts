import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "blueshift",
  name: "Blueshift",
  description:
    "Learn how to write your own on-chain programs in the Solana ecosystem.",
  links: {
    website: "https://blueshift.gg/",
    twitter: "https://x.com/blueshift",
  },
  tags: ["dapp"],
};

export const contracts: ContractRaw[] = [
  { name: "Learn", address: "shftxrF75jt6u1nXCkkiarjwz4ENqm1tnummZZuBrDp" },
];
