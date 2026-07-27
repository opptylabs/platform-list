import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "flexlend",
  name: "Lulo",
  description:
    "Lulo is a decentralized lending aggregator, which automatically optimizes users deposits by migrating their deposits to the lending pool with the best yield, while allowing for personalized risk settings",
  defiLlamaId: "lulo",
  links: {
    website: "https://www.lulo.fi",
    discord: "https://discord.com/invite/lulo",
    telegram: "https://t.me/uselulo",
    twitter: "https://x.com/uselulo",
    github: "https://github.com/lulo-labs",
    documentation: "https://docs.lulo.fi/",
  },
  tags: ["lending"],
};

export const contracts: ContractRaw[] = [
  { name: "Router", address: "FL3X2pRsQ9zHENpZSKDRREtccwJuei8yg9fwDu9UN69Q" },
];
