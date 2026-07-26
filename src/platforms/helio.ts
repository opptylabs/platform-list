import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "helio",
  name: "MoonPay Commerce (Helio)",
  description:
    "MoonPay Commerce (formerly Helio) is a crypto payment infrastructure enabling merchants to accept cryptocurrency payments.",
  tags: ["tool", "infrastructure", "payments"],
  defiLlamaId: "helio",
  links: {
    website: "https://www.hel.io/",
    twitter: "https://x.com/MoonPayCommerce",
  },
};

export const contracts: ContractRaw[] = [
  { name: "Payment", address: "ENicYBBNZQ91toN7ggmTxnDGZW14uv9UkumN7XBGeYJ4" },
  {
    name: "Payment V1",
    address: "3KPRuKWxV6PtneZXbokMBwdF4T9brCFx7FcmKJ2tPqqt",
  },
];
