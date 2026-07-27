import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "tuktuk",
  name: "TukTuk",
  description: "TukTuk is a task scheduling platform for on-chain automation.",
  links: {
    website: "https://www.tuktuk.fun",
    documentation: "https://www.tuktuk.fun/docs",
    github: "https://github.com/helium/tuktuk",
  },
  tags: ["infrastructure"],
  addedAt: 1764244800000,
};

export const contracts: ContractRaw[] = [
  { name: "Schedule", address: "tuktukUrfhXT6ZT77QTU8RQtvgL967uRuVagWF57zVA" },
];
