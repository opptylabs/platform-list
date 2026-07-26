import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "parcl",
  name: "Parcl",
  description:
    "Parcl is a decentralized real estate trading protocol that enables users to trade perpetual contracts on real estate price indices.",
  defiLlamaId: "parcl",
  links: {
    website: "https://app.parcl.co/",
    discord: "https://discord.gg/parcl",
    twitter: "https://x.com/Parcl",
    github: "https://github.com/ParclFinance",
    documentation: "https://docs.parcl.co/",
  },
  platformToken: "4LLbsb5ReP3yEtYzmXewyGjcir5uXtKFURtaEUVC2AHs",
  tags: ["dapp", "rwa"],
};

export const contracts: ContractRaw[] = [
  {
    name: "Liquidity & Trading",
    address: "3parcLrT7WnXAcyPfkCz49oofuuf2guUKkjuFkAhZW8Y",
  },
  {
    name: "Parcl Staking",
    address: "2gWf5xLAzZaKX9tQj9vuXsaxTWtzTZDFRn21J3zjNVgu",
  },
  { name: "Airdrop", address: "5tu3xkmLfud5BAwSuQke4WSjoHcQ52SbrPwX9es8j6Ve" },
];
