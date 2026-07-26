import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "elemental",
  name: "Elemental",
  description:
    "Elemental is a DeFi fund providing simplified access to yield strategies and portfolio management.",
  links: {
    website: "https://elemental.fund/",
    telegram: "https://tg.elemental.fund",
    twitter: "https://x.com/elementaldefi",
    github: "https://github.com/elementalfund",
    documentation: "https://docs.elemental.fund/",
  },
  tags: ["dapp", "lending", "vault", "defi"],
};

export const contracts: ContractRaw[] = [
  {
    name: "Elemental",
    address: "ELE5vYY81W7UCpTPs7SyD6Bwm5FwZBntTW8PiGqM5d4A",
  },
  {
    name: "Elemental",
    address: "ELE6rYCZUaegWxVhWM4ef9pXZBAgGUVaVKkTbDvX6BMU",
  },
  {
    name: "Elemental V2",
    address: "ELE7vRKKCzWT5SEt1eey2Snn3z6pWmBuv5AjDq3BeS1Y",
  },
];
