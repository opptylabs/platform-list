import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "aurory",
  name: "Aurory",
  description:
    "Aurory is a free-to-play JRPG featuring turn-based battles, NFT creatures, and token staking for in-game rewards.",
  tags: ["nft-collection", "gaming"],
  links: {
    website: "https://app.aurory.io",
    discord: "https://discord.gg/aurory",
    twitter: "https://x.com/AuroryProject",
    documentation: "https://docs.aurory.io/",
    github: "https://github.com/Aurory-Game",
  },
  platformToken: "AURYydfxJib1ZkTir1Jn1J9ECYUtjb6rKQVmtYaixWPP",
};

export const contracts: ContractRaw[] = [
  { name: "Staking", address: "StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x" },
  { name: "Staking", address: "STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5" },
];
