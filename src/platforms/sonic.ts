import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "sonic",
  name: "Sonic",
  description:
    "Sonic is an atomic SVM chain built for sovereign game economies, utilizing the HyperGrid framework for high-throughput on-chain gaming.",
  links: {
    website: "https://www.sonic.game/",
    discord: "https://discord.com/invite/joinmirrorworld",
    twitter: "https://x.com/SonicSVM",
    github: "https://github.com/mirrorworld-universe",
    documentation: "https://docs.sonic.game/",
  },
  platformToken: "SonicxvLud67EceaEzCLRnMTBqzYUUYNr93DBkBdDES",
  tokens: ["sonickAJFiVLcYXx25X9vpF293udaWqDMUCiGtk7dg2"],
  tags: ["gaming", "infrastructure"],
};

export const contracts: ContractRaw[] = [
  { name: "Staking", address: "g3yMgSB3Q7gNjMfSoCm1PiJihqHdNJeUuPHvRyf45qY" },
];
