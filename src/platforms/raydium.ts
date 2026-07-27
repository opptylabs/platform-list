import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "raydium",
  name: "Raydium",
  description:
    "Raydium is an automated market maker (AMM) built on the Solana blockchain which enables lightning-fast trades, permissionless pool creation, and new features for earning yield",
  defiLlamaId: "raydium",
  links: {
    website: "https://raydium.io/",
    discord: "https://discord.com/invite/raydium",
    telegram: "https://t.me/raydiumprotocol",
    github: "https://github.com/raydium-io",
    documentation: "https://docs.raydium.io/raydium/",
    twitter: "https://x.com/Raydium",
  },
  platformToken: "4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R",
  tags: ["dex", "launchpad"],
};

export const contracts: ContractRaw[] = [
  { name: "AMM v4", address: "675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8" },
  { name: "AMM v5", address: "5quBtoiQqxF9Jv6KYKctB59NT3gtJD2Y65kdnB1Uev3h" },
  {
    name: "AMM Rooting",
    address: "routeUGWgWzqBWFcrCfv8tritsqukccJPu3q5GPP3xS",
  },
  { name: "CLMM", address: "CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK" },
  { name: "CPMM", address: "CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C" },
  { name: "Farm V3", address: "EhhTKczWMGQt46ynNeRX1WfeagwwJd7ufHvCDjRxjo5Q" },
  { name: "Farm V4", address: "CBuCnLe26faBpcBP2fktp4rp8abpcAnTWft6ZrP5Q4T" },
  { name: "Farm V5", address: "9KEPoZmtHUrBbhWN1v1KWLMkkvwY6WLtAVUCPRtRjP4z" },
  { name: "Farm V6", address: "FarmqiPv5eAj3j1GMdMCMUGXqPUvmquZtMy86QH6rzhG" },
  { name: "IDO V1", address: "6FJon3QE27qgPVggARueB22hLvoh22VzJpXv4rBEoSLF" },
  { name: "IDO V2", address: "CC12se5To1CdEuw7fDS27B7Geo5jJyL7t5UK2B44NgiH" },
  { name: "IDO V3", address: "9HzJyW1qZsEiSfMUf6L2jo3CcTKAyBmSyKdwQeYisHrC" },
  { name: "IDO V4", address: "DropEU8AvevN3UrXWXTMuz3rqnMczQVNjq3kcSdW2SQi" },
  { name: "Launchpad", address: "LanMV9sAd7wArD4vJFi2qDdfnVhFxYSUg6eADduJ3uj" },
];
