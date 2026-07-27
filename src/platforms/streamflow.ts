import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "streamflow",
  name: "Streamflow",
  description:
    "Streamflow exponentially grows on-chain economies by providing infrastructure for creation, distribution, and incentive alignment of tokens.",
  defiLlamaId: "streamflow",
  tags: ["launchpad"],
  links: {
    website: "https://app.streamflow.finance/",
    discord: "https://discord.com/invite/streamflow-851921970169511976",
    twitter: "https://x.com/streamflow_fi",
    github: "https://github.com/streamflow-finance",
    medium: "https://streamflow.medium.com/",
    documentation: "https://docs.streamflow.finance/en/",
  },
  platformToken: "STREAMribRwybYpMmSYoCsQUdr6MZNXEqHgm7p1gu9M",
};

export const contracts: ContractRaw[] = [
  { name: "Vesting", address: "strmRqUCoQUgGUan5YhzUZa6KqdzwX5L6FpUxfmKg5m" },
  { name: "Staking", address: "STAKEvGqQTtzJZH6BWDcbpzXXn2BBerPAgQ3EGLN2GH" },
  { name: "Airdrops", address: "aSTRM2NKoKxNnkmLWk9sz3k74gKBk9t7bpPrTGxMszH" },
  {
    name: "Airdrop Distribution",
    address: "MErKy6nZVoVAkryxAejJz2juifQ4ArgLgHmaJCQkU7N",
  },
];
