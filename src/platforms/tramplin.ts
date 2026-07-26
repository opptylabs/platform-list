import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "tramplin",
  name: "Tramplin",
  description: "Boost your savings with randomized yield.",
  links: {
    website: "https://tramplin.io/",
    twitter: "https://x.com/Tramplin_io",
    discord: "https://discord.com/invite/tramplin",
  },
  tags: ["dapp"],
  addedAt: 1770897600000,
};

export const contracts: ContractRaw[] = [
  { name: "Tramplin", address: "3NJyzGWjSHP4hZvsqakodi7jAtbufwd52vn1ek6EzQ35" },
];
