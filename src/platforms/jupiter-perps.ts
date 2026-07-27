import { PlatformRaw, ContractRaw } from "../types";
import { platform as jupiterPlatform } from "./jupiter-exchange";
export const platform: PlatformRaw = {
  id: "jupiter-perps",
  name: "Jupiter Perps",
  description:
    "Jupiter Perps is Jupiter's perpetual futures product, with the JLP pool providing liquidity to traders.",
  links: {
    website: "https://jup.ag/perps",
    twitter: "https://x.com/jupiter_trade",
  },
  platformToken: "27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4",
  tags: ["perpetuals"],
  parentId: jupiterPlatform.id,
};

export const contracts: ContractRaw[] = [
  { name: "Perps", address: "PERPHjGBqRHArX4DySjwM6UJHiR3sWAatqfdBS2qQJu" },
  {
    name: "Delta Neutral Vault",
    address: "BUNDeH5A4c47bcEoAjBhN3sCjLgYnRsmt9ibMztqVkC9",
  },
];
