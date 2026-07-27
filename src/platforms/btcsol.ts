import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "btcsol",
  name: "btcSOL",
  description:
    "btcSOL is a liquid staking token that converts SOL staking yield into daily BTC rewards through automatic zBTC purchases.",
  tags: ["bitcoin"],
  links: {
    website: "https://btcsol.co/",
    discord: "https://discord.com/invite/zeusnetwork",
    twitter: "https://x.com/btcsol_co",
    documentation: "https://docs.btcsol.co/",
  },
  defiLlamaId: "zeus-btcsol",
  tokens: ["BSoLov7Es6mGLkBq7Z89PSWDmk6Vsw4jVxdfE2UHrJTX"],
};

export const contracts: ContractRaw[] = [
  { name: "Earn", address: "SYNMjud3ALEaeJhxuq8gpc2wJzC4XLHfxp9SgKmzQ8r" },
];
