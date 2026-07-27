import { PlatformRaw, ContractRaw } from "../types";
import { platform as jupiterPlatform } from "./jupiter-exchange";
export const platform: PlatformRaw = {
  id: "jupiter-global",
  name: "Jupiter Global",
  description: "Jupiter Global is a card product in the Jupiter ecosystem.",
  links: {
    website: "https://jupiter.global/",
  },
  tags: ["card"],
  parentId: jupiterPlatform.id,
};

export const contracts: ContractRaw[] = [];
