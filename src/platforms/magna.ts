import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "magna",
  name: "Magna",
  description:
    "Magna is a token management platform for cap table management, vesting automation, airdrops, and custody solutions across multiple chains including Solana.",
  defiLlamaId: "adrastea",
  tags: ["tool", "dapp"],
  links: {
    website: "https://www.magna.so/",
    twitter: "https://x.com/magna_digital/photo",
  },
};

export const contracts: ContractRaw[] = [
  {
    name: "Vesting Airdrop",
    address: "3zK38YBP6u3BpLUpaa6QhRHh4VXdv3J8cmD24fFpuyqy",
  },
  { name: "Core", address: "magnaSHyv8zzKJJmr8NSz5JXmtdGDTTFPEADmvNAwbj" },
];
