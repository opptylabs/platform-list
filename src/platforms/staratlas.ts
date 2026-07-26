import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "staratlas",
  name: "Star Atlas",
  description:
    "Star Atlas is a blockchain-based space exploration and strategy game featuring NFT ships, territorial conquest, and a player-driven economy.",
  tags: ["gaming"],
  links: {
    website: "https://staratlas.com/",
    discord: "https://discord.com/invite/StarAtlas",
    telegram: "https://t.me/staratlasgame",
    twitter: "https://x.com/staratlas",
    github: "https://github.com/staratlasmeta",
    documentation: "https://staratlas.com/newsroom/game-manuals",
  },
  platformToken: "poLisWXnNRwC6oBu1vHiuKQzFjGL4XDSu4g9qjz9qVk",
  tokens: ["ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx"],
};

export const contracts: ContractRaw[] = [
  { name: "Staking", address: "ATLocKpzDbTokxgvnLew3d7drZkEzLzDpzwgrgWKDbmc" },
  { name: "Locker", address: "Lock7kBijGCQLEFAmXcengzXKA88iDNQPriQ7TbgeyG" },
];
