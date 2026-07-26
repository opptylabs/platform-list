import { PlatformRaw, ServiceRaw } from "../types";

export const platform: PlatformRaw = {
  id: "ample",
  name: "Ample",
  description:
    "Prize-linked savings protocol where users deposit USDC, keep their principal with no lockups, and pool the yield to fund rewards distributed via on-chain randomness.",
  links: {
    website: "https://solana.ample.money/",
    twitter: "https://x.com/AmpleHQ",
    documentation: "https://solana.ample.money/docs",
  },
  tags: ["defi", "dapp"],
  addedAt: 1783430693000,
};

const mainProgram = {
  name: "Ample",
  address: "BPdfgbFKNQELh96XFqAZGBRfe3CJ6Ly1JJ4fmAVgWcU8",
};

export const mainService: ServiceRaw = {
  id: `${platform.id}-savings`,
  name: "Savings",
  platformId: platform.id,
  contractsRaw: [mainProgram],
};

export const services: ServiceRaw[] = [mainService];
