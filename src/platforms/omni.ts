import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "omni",
  name: "Omni Bridge",
  description:
    "Omni Bridge is a cross-chain bridge by NEAR Protocol enabling asset transfers between Solana and other chains through chain abstraction.",
  links: {
    documentation:
      "https://docs.near.org/chain-abstraction/omnibridge/overview",
    website: "https://docs.near.org/chain-abstraction/omnibridge/overview",
    twitter: "https://x.com/nearprotocol",
  },
  tags: ["bridge"],
  addedAt: 1763380800000,
};

export const contracts: ContractRaw[] = [
  { name: "Bridge", address: "dahPEoZGXfyV58JqqH85okdHmpN8U2q8owgPUXSCPxe" },
];
