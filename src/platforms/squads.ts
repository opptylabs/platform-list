import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "squads",
  name: "Squads",
  description:
    "Squads is a multisig and smart account protocol for secure team treasury management, program upgrades, and on-chain governance.",
  tags: ["tool", "dapp"],
  links: {
    website: "https://squads.xyz/",
    discord: "https://discord.gg/squads",
    twitter: "https://x.com/multisig",
    github: "https://github.com/Squads-Protocol",
    documentation: "https://docs.squads.so/main/basics/welcome-to-squads",
  },
};

export const contracts: ContractRaw[] = [
  {
    name: "Multisig V4",
    address: "SQDS4ep65T869zMMBKyuUq6aD6EgTu8psMjkvj52pCf",
  },
];
