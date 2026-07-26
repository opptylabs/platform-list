import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "growcorp",
  name: "Grow Corp",
  description:
    "GROW CORP is a PvP farming game on Solana where players compete for 8 crop slots. Plant crops, earn $GROW tokens, and defend your harvest from other farmers.",
  tags: ["tool", "gaming"],
  links: {
    website: "https://growcorp.org/",
    twitter: "https://x.com/growingcorp",
    documentation: "https://docs.growcorp.org/",
  },
  platformToken: "6M1YktCLJUyAZwWbJuRrM3pKBmo8KpYeDZm9bk1Jr4gX",
};

export const contracts: ContractRaw[] = [
  { name: "Grow", address: "CJJD2C8Gq7wdtLwT9GjGa37vxjAgVzNzyYfp77Fzb7i8" },
];
