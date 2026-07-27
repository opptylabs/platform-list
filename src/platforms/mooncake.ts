import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "mooncake",
  name: "Mooncake",
  description:
    "Mooncake is a permissionless tokenized perpetual market offering leveraged tokens for long and short exposure.",
  defiLlamaId: "mooncake",
  links: {
    website: "https://app.mooncake.fi/",
    documentation: "https://docs.mooncake.fi/",
    twitter: "https://x.com/mooncake_fi",
  },
  tags: ["vault"],
  platformToken: "J1wnHdKvP34fg7TtYdX63UPJMTdXNzJGEqfNJB22vKjU",
};

export const contracts: ContractRaw[] = [
  { name: "Mooncake", address: "mnCk3moW6q9UszVev3C9JjtE4YoviXgLwiLCnUy3c4D" },
];
