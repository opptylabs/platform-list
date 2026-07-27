import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "degencoinflip",
  name: "Degen Coin Flip",
  description:
    "Degen Coin Flip is a provably fair gambling game where users can bet SOL on coin flip outcomes.",
  links: {
    website: "https://degencoinflip.com/",
    twitter: "https://x.com/degencoinflip",
    discord: "https://discord.gg/degencoinflip",
  },
  tags: ["gaming"],
};

export const contracts: ContractRaw[] = [
  { name: "Coinflip", address: "BmjJ85zsP2xHPesBKpmHYKt136gzeTtNbeVDcdfybHHT" },
];
