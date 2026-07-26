import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "loopscale",
  name: "Loopscale",
  description:
    "Loopscale is an order-book based lending protocol that matches lenders and borrowers directly for customizable loan terms on any asset.",
  defiLlamaId: "loopscale",
  links: {
    website: "https://loopscale.com/",
    discord: "https://discord.gg/loopscale",
    twitter: "https://x.com/Loopscale",
    github: "https://github.com/bridgesplit",
    documentation: "https://docs.loopscale.com/",
  },
  tags: ["dapp", "lending", "defi"],
};

export const contracts: ContractRaw[] = [
  { name: "Loopscale", address: "1oopBoJG58DgkUVKkEzKgyG9dvRmpgeEm1AVjoHkF78" },
  {
    name: "CreditBook",
    address: "abfcSQac2vK2Pa6UAJb37DzarVxF15bDTdphJzAqYYp",
  },
];
