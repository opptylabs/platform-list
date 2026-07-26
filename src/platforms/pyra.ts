import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "pyra",
  name: "Pyra",
  description: "Credit card and DeFi protocol",
  tags: ["dapp", "defi", "payments", "lending", "card"],
  links: {
    website: "https://www.pyra.fi/",
    discord: "https://discord.gg/GetPyra",
    telegram: "https://t.me/GetPyra",
    twitter: "https://x.com/GetPyra",
    documentation: "https://docs.pyra.fi/",
  },
};

export const contracts: ContractRaw[] = [
  { name: "Loans", address: "6JjHXLheGSNvvexgzMthEcgjkcirDrGduc3HAKB2P1v2" },
];
