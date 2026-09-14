import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "caged",
  name: "Caged",
  description:
    "Token locker for pump.fun and stonk.fun coins. Locked tokens keep receiving the launchpad's holder rewards, which the lock owner can claim while the tokens stay locked.",
  tags: ["tool"],
  links: {
    website: "https://cagedballs.fun/",
    twitter: "https://x.com/cagedballs",
    github: "https://github.com/mad-cook/caged",
    documentation:
      "https://github.com/mad-cook/caged/blob/main/docs/INTEGRATION.md",
  },
  platformToken: "FAQTVQn2dgerSw6sWDE3dx6duPpaAqjfDo8pXS4fpump",
  addedAt: 1789344000000,
};

export const contracts: ContractRaw[] = [
  {
    name: "Holder Locker",
    address: "65cX8gGch8x4vQvU4gnpPcepwKadDSAtJ4ZgZg3hp61t",
  },
];
