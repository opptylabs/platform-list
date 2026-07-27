import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "deriverse",
  name: "Deriverse",
  description: "Deriverse is a spot & derivatives Solana liquidity layer.",
  links: {
    website: "https://www.deriverse.io/",
    twitter: "https://x.com/deriverse_io",
    documentation: "https://deriverse.gitbook.io/deriverse-v1",
  },
  tags: ["dex"],
};

export const contracts: ContractRaw[] = [
  {
    name: "Deriverse",
    address: "DRVSpZ2YUYYKgZP8XtLhAGtT1zYSCKzeHfb4DgRnrgqD",
  },
];
