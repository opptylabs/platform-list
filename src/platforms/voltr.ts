import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "voltr",
  name: "Voltr",
  description: "Automated yield optimization vaults on Solana",
  links: {
    website: "https://voltr.xyz/",
    twitter: "https://x.com/voltrxyz",
    github: "https://github.com/voltrxyz",
    documentation: "https://docs.voltr.xyz/",
  },
  tags: ["dapp", "vault", "defi"],
};

export const contracts: ContractRaw[] = [
  { name: "Vault", address: "vVoLTRjQmtFpiYoegx285Ze4gsLJ8ZxgFKVcuvmG1a8" },
];
