import { PlatformRaw, ContractRaw } from "../types";
import { platform as jupiterPlatform } from "./jupiter-exchange";
export const platform: PlatformRaw = {
  id: "gum",
  name: "GUM",
  links: {
    website: "https://x.com/Jupnet",
    twitter: "https://x.com/Jupnet",
  },
  tags: ["dex", "bridge"],
  parentId: jupiterPlatform.id,
};

export const contracts: ContractRaw[] = [
  { name: "Bank", address: "bk1PDAkbHEBGtVRiM94Lzets8gVFP7FgySyfkAc8MPN" },
  {
    name: "Bank Program",
    address: "BankK1Y7HK6ZYmPorzAuUNk1TbJixDFQnqfWnP7HNmFZ",
  },
];
