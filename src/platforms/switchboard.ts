import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "switchboard",
  name: "Switchboard",
  description:
    "Switchboard is a permissionless oracle network that connects dApps to real-world data feeds, randomness, and off-chain computation across multiple blockchains.",
  links: {
    website: "https://switchboard.xyz/",
    discord: "https://discord.gg/switchboardxyz",
    telegram: "https://t.me/switchboardxyz",
    twitter: "https://x.com/switchboardxyz",
    github: "https://github.com/switchboard-xyz",
    medium: "https://switchboardxyz.medium.com/",
    documentation: "https://docs.switchboard.xyz/",
  },
  tags: ["oracle"],
  platformToken: "SW1TCHLmRGTfW5xZknqQdpdarB8PD95sJYWpNp9TbFx",
};

export const contracts: ContractRaw[] = [
  { name: "On Demand", address: "SBondMDrcV3K4kxZR1HNVT7osZxAHVHgYXL5Ze1oMUv" },
];
