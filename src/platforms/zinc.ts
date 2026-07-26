import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "zinc",
  name: "Zinc",
  description:
    "Zinc is a private proof-of-work mining protocol on Solana powered by MetaDAO and Arcium.",
  tags: ["dapp"],
  links: {
    website: "https://zinc.cash",
    twitter: "https://x.com/zinc_cash",
    github: "https://github.com/sphalerite-foundry",
  },
  platformToken: "zinc155BS4mSPk8GXQj4R5hkVDQXcW253pTYq5SGyfi",
};

export const contracts: ContractRaw[] = [
  {
    name: "ZINC Mining",
    address: "zincUFpnqYwdYMc1KfH6rKcBvbcdVtHKckKhvrHLDsV",
  },
];
