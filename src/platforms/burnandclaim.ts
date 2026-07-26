import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "burnandclaim",
  name: "Burn and Claim",
  description:
    "The All-In-One Solana Incinerator. Burn Tokens & NFTs. Close Accounts. Claim Back SOL.",
  links: {
    website: "https://www.burnandclaim.com",
    twitter: "https://x.com/burnandclaim",
  },
  tags: ["tool"],
};

export const contracts: ContractRaw[] = [
  {
    name: "Incinerator",
    address: "abrn446KXzKZxSowJdHN9XumbGfQi4DdAfWHBT7X81r",
  },
];
