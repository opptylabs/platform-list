import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "kamino",
  name: "Kamino",
  description:
    "Kamino is a DeFi protocol offering lending, borrowing, automated liquidity vaults, and leverage products.",
  defiLlamaId: "kamino-finance",
  links: {
    website: "https://kamino.finance/",
    discord: "https://discord.com/invite/kaminofinance",
    twitter: "https://x.com/kamino",
    github: "https://github.com/Kamino-Finance",
    documentation: "https://docs.kamino.finance/",
  },
  platformToken: "KMNo3nJsBXfcpJTVhZcXLW7RmTwTt4GVFE7suUBo9sS",
  tags: ["lending", "vault"],
};

export const contracts: ContractRaw[] = [
  {
    name: "Scope Price",
    address: "HFn8GnPADiny6XqUoWE8uRPPxb29ikn4yTuPa9MF2fWJ",
  },
  {
    name: "Kamino Lend",
    address: "KLend2g3cP87fffoy8q1mQqGKjrxjC8boSyAYavgmjD",
  },
  {
    name: "Kamino Limit Order",
    address: "LiMoM9rMhrdYrfzUCxQppvxCSG1FcrUK9G8uLq4A1GF",
  },
  {
    name: "Liquidity",
    address: "6LtLpnUFNByNXLyCoK9wA2MykKAmQNZKBdY8s47dehDc",
  },
  {
    name: "Kamino Vault",
    address: "KvauGMspG5k6rtzrqqn7WNn3oZdyKqLKwK2XWQ8FLjd",
  },
  {
    name: "Kamino Farm",
    address: "FarmsPZpWu9i7Kky8tPN37rs2TpmMrAZrC7S7vJa91Hr",
  },
  { name: "Leverage", address: "CRhtqXk98ATqo1R8gLg7qcpEMuvoPzqD5GNicPPqLMD" },
  { name: "Airdrop", address: "KdisqEcXbXKaTrBFqeDLhMmBvymLTwj9GmhDcdJyGat" },
];
