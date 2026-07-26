import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "lavarage",
  name: "Lavarage",
  description:
    "Lavarage is a permissionless spot margin trading platform that enables leveraged trading for any token by sourcing liquidity from DEXs.",
  defiLlamaId: "lavarage",
  links: {
    website: "https://app.lavarage.xyz/",
    twitter: "https://x.com/lavaragexyz",
    documentation: "https://lavarage.gitbook.io/",
    telegram: "https://t.me/lavarage_xyz",
    medium: "https://medium.com/@lavaragexyz",
  },
  tags: ["dapp", "trading"],
};

export const contracts: ContractRaw[] = [
  {
    name: "USDC Leverage",
    address: "1avaAUcjccXCjSZzwUvB2gS3DzkkieV2Mw8CjdN65uu",
  },
  {
    name: "SOL Leverage",
    address: "CRSeeBqjDnm3UPefJ9gxrtngTsnQRhEJiTA345Q83X3v",
  },
];
