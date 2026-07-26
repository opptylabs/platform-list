import { PlatformRaw, ContractRaw } from "../types";
import { platform as jupiterPlatform } from "./jupiter-exchange";
export const platform: PlatformRaw = {
  id: "jupiter-governance",
  name: "Jupiter DAO",
  description: "The first voting platform for Cats in history.",
  links: {
    website: "https://vote.jup.ag/",
    twitter: "https://x.com/jup_dao",
  },
  tags: ["dao", "dapp"],
  parentId: jupiterPlatform.id,
};

export const contracts: ContractRaw[] = [
  {
    name: "ASR Distributor",
    address: "Dis2TfkFnXFkrtvAktEkw37sdb7qwJgY6H7YZJwk51wK",
  },
  {
    name: "Governance",
    address: "GovaE4iu227srtG2s3tZzB4RmWBzw8sTwrCLZz7kN7rY",
  },
  {
    name: "Locker Vote",
    address: "voTpe3tHQ7AjQHMapgSue2HJFAh2cGsdokqN3XqmVSj",
  },
];
