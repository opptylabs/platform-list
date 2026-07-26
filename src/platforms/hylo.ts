import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "hylo",
  name: "Hylo",
  description:
    "Hylo is a stablecoin protocol issuing a dollar-pegged stablecoin backed by SOL and leveraged SOL positions.",
  links: {
    website: "https://hylo.so/",
    twitter: "https://x.com/hylo_so",
    telegram: "https://t.me/hylo_announcements",
    github: "https://github.com/hylo-so",
  },
  defiLlamaId: "hylo",
  tags: ["dapp", "stablecoin", "defi", "lst"],
  tokens: [
    "HnnGv3HrSqjRpgdFmx7vQGjntNEoex1SU4e9Lxcxuihz",
    "5YMkXAYccHSGnHn9nob9xEvv6Pvka9DZWH7nTbotTu9E",
    "4sWNB8zGWHkh6UnmwiEtzNxL4XrN7uK9tosbESbJFfVs",
  ],
};

export const contracts: ContractRaw[] = [
  { name: "Exchange", address: "HYEXCHtHkBagdStcJCp3xbbb9B7sdMdWXFNj6mdsG4hn" },
  {
    name: "Stability Pool",
    address: "HysTabVUfmQBFcmzu1ctRd1Y1fxd66RBpboy1bmtDSQQ",
  },
];
