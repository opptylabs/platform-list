import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "solanaid",
  name: "Solana ID",
  description: "Decentralized identity and naming service on Solana",
  links: {
    website: "https://app.solana.id/",
    twitter: "https://x.com/solanaidentity",
    discord: "https://discord.com/invite/solanaid",
    telegram: "https://t.me/+NKjmb1u7LZw5YTU6",
  },
  tags: ["dapp"],
  platformToken: "SoLiDMWBct5TurG1LNcocemBK7QmTn4P33GSrRrcd2n",
};

export const contracts: ContractRaw[] = [
  { name: "Staking", address: "gp8fqiE5cwX3JRT8unpKeFutNdMihyisAe3nx6L3S1p" },
];
