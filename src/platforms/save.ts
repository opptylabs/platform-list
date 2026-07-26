import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "save",
  name: "Save",
  description:
    "Save (formerly Solend) is a decentralized lending and borrowing protocol with isolated pools and permissionless market creation.",
  defiLlamaId: "save",
  tags: ["dapp", "lending", "defi", "lst"],
  links: {
    website: "https://save.finance/",
    discord: "https://discord.com/invite/J7m48UUPkJ",
    twitter: "https://x.com/save_finance",
    github: "https://github.com/solendprotocol",
    documentation: "https://docs.save.finance/",
  },
  platformToken: "SAVEaeeqeXNKYb4Lyx28DkUms5gyZ76vGa6fCfdzWfK",
  tokens: [
    "SLNDpmoWTVADgEdndyvWzroNL7zSi1dF9PC3xHGtPwp",
    "SAVEDpx3nFNdzG3ymJfShYnrBuYy7LtQEABZQ3qtTFt",
  ],
};

export const contracts: ContractRaw[] = [
  { name: "Lending", address: "So1endDq2YkqhipRh3WViPa8hdiSpxWy6z3Z6tMCpAo" },
  {
    name: "Save Migration",
    address: "S2SquuEfKRHm1riCj13WobJJzf3CgUwu7QmijxjpTfx",
  },
  { name: "Reward", address: "mrksLcZ6rMs9xkmJgw6oKiR3GECw44Gb5NeDqu64kiw" },
];
