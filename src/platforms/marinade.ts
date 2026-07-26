import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "marinade",
  name: "Marinade",
  description: "Marinade connects SOL holders with the best staking rates.",
  defiLlamaId: "marinade-finance",
  links: {
    website: "https://marinade.finance/",
    discord: "https://discord.gg/yTdH8YkYKg",
    twitter: "https://x.com/MarinadeFinance",
    github: "https://github.com/marinade-finance",
    documentation: "https://docs.marinade.finance/",
  },
  platformToken: "MNDEFzGvMt87ueuHvVU9VcTqsAP5b3fTGPsHuuPA5ey",
  tokens: ["mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So"],
  tags: ["dapp"],
};

export const contracts: ContractRaw[] = [
  { name: "Ticket", address: "MarBmsSgKXdrN1egZf5sqe1TMai9K1rChYNDJgjq7aD" },
  { name: "Airdrop", address: "indiXdKbsC4QSLQQnn6ngZvkqfywn6KgEeQbkGSpk1V" },
];
