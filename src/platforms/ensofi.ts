import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "ensofi",
  name: "EnsoFi",
  description:
    "Cross-chain DeFi Hub. Lend, Borrow, LSTs, Earn & more with stable returns.",
  links: {
    website: "https://app.ensofi.xyz",
    discord: "https://discord.com/invite/ensofi",
    telegram: "https://t.me/ensofiapp_bot/ensofi?startapp=mainnet",
    twitter: "https://x.com/Ensofi_xyz",
    github: "https://github.com/Ensofi-xyz",
    documentation: "https://ensofi.gitbook.io/ensofi",
  },
  tags: ["lending"],
};

export const contracts: ContractRaw[] = [
  {
    name: "Lending Fixed Terms",
    address: "ensoQXKf4MvNuEC3M9xmcqUqgucFNd5UzAonDdUtgqn",
  },
  {
    name: "Lending Flexible Terms",
    address: "enseM1J4dGgwEw3qDyuVBi7YsjgwqvKzuX3ZLaboLGv",
  },
  { name: "Liquidity", address: "ensSuXMeaUhRC7Re3ukaxLcX2E4qmd2LZxbxsK9XcWz" },
];
