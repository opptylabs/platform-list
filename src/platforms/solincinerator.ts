import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "solincinerator",
  name: "Sol Incinerator",
  description:
    "Sol Incinerator is a utility tool for burning unwanted NFTs, tokens, and empty accounts to reclaim SOL rent deposits.",
  links: {
    website: "https://sol-incinerator.com/",
    twitter: "https://x.com/solincinerator",
    discord: "https://discord.gg/solslugs",
  },
  tags: ["tool"],
};

export const contracts: ContractRaw[] = [
  {
    name: "Incinerator",
    address: "F6fmDVCQfvnEq2KR8hhfZSEczfM9JK9fWbCsYJNbTGn7",
  },
  {
    name: "Safecinerator",
    address: "CLEANALo6FtS6quqTTEXDGFFTuSKMkeKGgcweeiPRJzK",
  },
];
