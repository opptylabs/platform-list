import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "huma",
  name: "Huma",
  description:
    "Huma Finance is a PayFi protocol providing instant liquidity for global payments and cross-border transactions.",
  tags: ["dapp", "stablecoin", "defi", "vault"],
  links: {
    website: "https://huma.finance/",
    twitter: "https://x.com/humafinance",
    discord: "https://discord.gg/29zVxZ6kCN",
    github: "https://github.com/00labs",
    documentation: "https://huma-finance.gitbook.io/huma-2.0",
  },
  platformToken: "HUMA1821qVDKta3u2ovmfDQeW2fSQouSKE8fkF44wvGw",
  tokens: [
    "59obFNBzyTBGowrkif5uK7ojS58vsuWz3ZCvg6tfZAGw",
    "HUPfpnsaJtJGpJxAPNX1vXah7BgYiQYt1c2JMgMumvPs",
  ],
};

export const contracts: ContractRaw[] = [
  {
    name: "Permissionless",
    address: "HumaXepHnjaRCpjYTokxY4UtaJcmx41prQ8cxGmFC5fn",
  },
  {
    name: "Institutional",
    address: "EVQ4s1b6N1vmWFDv8PRNc77kufBP8HcrSNWXQAhRsJq9",
  },
  { name: "Airdrop", address: "Distcc8stwHiwnxxj5BWkP9Re7MWRhH3JqRaRxfQC6Zr" },
  { name: "Staking", address: "vsRJM68m7i18PwzTFphgPYXTujCgxEi28knpUwSmg3q" },
  { name: "Prime", address: "prm1azdDGzyqP76s3Hv2nuG3uLnBgR5u2d7pANwmmzC" },
];
