import { PlatformRaw, ContractRaw } from "../types";
import { platform as jupiterPlatform } from "./jupiter-exchange";
export const platform: PlatformRaw = {
  id: "jupiter-offerbook",
  name: "Jupiter Offerbook",
  links: {
    website: "https://offerbook.jup.ag/",
    twitter: "https://x.com/jup_offerbook",
  },
  tags: ["lending"],
  parentId: jupiterPlatform.id,
};

export const contracts: ContractRaw[] = [
  { name: "Loans", address: "offerbkFMvVfpQhL8ZQ5iromnjct5rz3r52B9ewu3ie" },
];
