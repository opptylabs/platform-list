import { PlatformRaw, ContractRaw } from "../types";
import { platform as jupiterPlatform } from "./jupiter-exchange";
export const platform: PlatformRaw = {
  id: "jupiter-portfolio",
  name: "Jupiter Portfolio",
  description:
    "Jupiter Portfolio lets users track their Solana wallet holdings and positions across all Solana.",
  links: {
    website: "https://jup.ag/portfolio",
    twitter: "https://x.com/jup_portfolio",
  },
  tags: ["tool"],
  parentId: jupiterPlatform.id,
};

export const contracts: ContractRaw[] = [];
