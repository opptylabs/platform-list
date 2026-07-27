import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "boop",
  name: "Boop",
  description:
    "Boop is a memecoin launchpad that gamifies token creation through community-driven dynamics, allowing users to launch tokens and earn rewards through staking.",
  defiLlamaId: "boop.fun",
  tags: ["memecoin", "launchpad"],
  links: {
    website: "https://boop.fun/",
    telegram: "https://t.me/boopdotfun",
    twitter: "https://x.com/boopdotfun",
  },
  platformToken: "boopkpWqe68MSxLqBGogs8ZbUDN4GXaLhFwNP7mpP1i",
};

export const contracts: ContractRaw[] = [
  { name: "Staking", address: "boopURdYr29D4C4BX7UWfi7rHQyinzCb4XRac3SHR85" },
  { name: "Pool", address: "boopiN5ZqKsQ1uCtQoPG7FeXVmJi7YcwngQQrZCp6qA" },
];
