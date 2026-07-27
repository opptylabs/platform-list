import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "bonkrewards",
  name: "Bonk Rewards",
  description:
    "Bonk Rewards is the staking and utility platform for BONK, the community meme coin of Solana, offering staking rewards, swaps, and DAO governance.",
  defiLlamaId: "bonkswap",
  tags: ["memecoin"],
  links: {
    website: "https://bonkrewards.com/",
    discord: "https://discord.com/invite/qaQa6M6mN2",
    telegram: "https://t.me/Official_Bonk_Inu",
    twitter: "https://x.com/bonk_inu",
    medium: "https://medium.com/@bonk_inu",
  },
  platformToken: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
};

export const contracts: ContractRaw[] = [
  { name: "Staking", address: "STAKEkKzbdeKkqzKpLkNQD3SUuLgshDKCD7U8duxAbB" },
  { name: "Fire", address: "FiRESpaNzgYUiba5vkb44CZJLZjrux1AUECdfwPRsNkg" },
  { name: "Swap", address: "BSwp6bEBihVLdqJRKGgzjcGLHkcTuzmSo1TQkHepzH8p" },
  { name: "BonkMas", address: "BMas2pUrC5GR1ZJFbJLy2UmBcEgCfdxB5QLSBrLRnvK4" },
  { name: "DAO", address: "HA99cuBQCCzZu1zuHN2qBxo2FBo1cxNLwKkdt6Prhy8v" },
];
