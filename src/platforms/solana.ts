import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "solana",
  name: "Solana",
  description:
    "Bring blockchain to the people. Solana supports experiences for power users, new consumers, and everyone in between.",
  links: {
    website: "https://solana.com/",
    discord: "https://solana.com/discord",
    telegram: "https://solana.com/telegram",
    twitter: "https://x.com/solana",
    github: "https://solana.com/github",
    documentation: "https://solana.com/docs",
  },
  tags: ["dapp"],
  platformToken: "So11111111111111111111111111111111111111111",
};

export const contracts: ContractRaw[] = [
  { name: "Staking", address: "Stake11111111111111111111111111111111111111" },
  {
    name: "Stake Pool",
    address: "SPoo1Ku8WFXoNDMHPsrGSTSG1Y47rzgn41SLUNakuHy",
  },
  {
    name: "Single Validator Stake Pool",
    address: "SVSPxpvHdN29nkVg9rPapPNDddN5DipNLRUFhyjFThE",
  },
];
