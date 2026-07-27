import { PlatformRaw, ContractRaw } from "../types";
import { platform as jupiterPlatform } from "./jupiter-exchange";
export const platform: PlatformRaw = {
  id: "jupiter-academy",
  name: "Jupiter Academy",
  description:
    "Jupiter Academy is Jupiter's educational platform teaching users about DeFi and the Jupiter product suite.",
  links: {
    website: "https://academy.jup.ag/",
    twitter: "https://x.com/jup_academy",
  },
  tags: ["learn"],
  parentId: jupiterPlatform.id,
};

export const contracts: ContractRaw[] = [];
