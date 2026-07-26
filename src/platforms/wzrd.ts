import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "wzrd",
  name: "WZRD",
  description:
    "WZRD is a Solana DeFi protocol that converts stream engagement into on-chain rewards. Participants earn CCM tokens through live stream activity, then claim, swap, stake, and compound rewards through a single interface.",
  links: {
    website: "https://app.twzrd.xyz/",
    twitter: "https://x.com/twaboreum",
    github: "https://github.com/twzrd",
    documentation: "https://docs.twzrd.xyz/",
  },
  platformToken: "Dxk8mAb3C7AM8JN6tAJfVuSja5yidhZM5sEKW3SRX2BM",
  tokens: ["E9Kt33axpCy3ve2PCY9BSrbPhcR9wdDsWQECAahzw2dS"],
  tags: ["dapp", "vault", "defi"],
  addedAt: 1740009600000,
};

export const contracts: ContractRaw[] = [
  {
    name: "Channel Vault",
    address: "5WH4UiSZ7fbPQbLrRCJyWxnTAoNyTZ3ZjcdgTuinCXmQ",
  },
];
