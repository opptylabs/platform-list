import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "openbook",
  name: "OpenBook",
  description:
    "OpenBook is an open-source, community-driven central limit orderbook (CLOB) DEX, a fork of the original Serum protocol.",
  defiLlamaId: "openbook",
  links: {
    website: "https://www.openbook.ag/",
    discord: "https://discord.gg/ySEq7GG9ts",
    twitter: "https://x.com/openbookdex",
    github: "https://github.com/openbook-dex",
  },
  tags: ["dapp"],
};

export const contracts: ContractRaw[] = [
  { name: "V1", address: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX" },
  { name: "V2", address: "opnbkNkqux64GppQhwbyEVc3axhssFhVYuwar8rDHCu" },
  { name: "V3", address: "opnb2LAfJYbRMAHHvqjCwQxanZn7ReEHp1k81EohpZb" },
];
