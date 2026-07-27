import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "pluto",
  name: "Pluto",
  description:
    "Pluto is a leveraged yield protocol enabling users to multiply their yield exposure through automated strategies.",
  defiLlamaId: "pluto",
  tags: ["vault"],
  links: {
    website: "https://pluto.so/",
    discord: "https://discord.com/invite/plutoleverage",
    telegram: "https://t.me/PlutoLeverage",
    twitter: "https://x.com/plutoleverage",
    github: "https://github.com/plutoleverage/",
    documentation: "https://docs.pluto.so/",
  },
};

export const contracts: ContractRaw[] = [
  {
    name: "Leverage Machine",
    address: "5UFYdXHgXLMsDzHyv6pQW9zv3fNkRSNqHwhR7UPnkhzy",
  },
  {
    name: "Leverage Machine V2",
    address: "PLUtoojGogHkKWXH4ZY3SiNYhsiE5CEoMJLPargRoQ9",
  },
];
