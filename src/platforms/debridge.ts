import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "debridge",
  name: "deBridge",
  description:
    "Cross-chain interoperability and liquidity transfer protocol that allows the decentralized transfer of arbitrary data and assets between various blockchains.",
  defiLlamaId: "debridge",
  links: {
    website: "https://debridge.finance/",
    discord: "https://discord.gg/debridge",
    telegram: "https://t.me/deBridge_finance",
    twitter: "https://x.com/deBridgeFinance",
    github: "https://github.com/debridge-finance/",
    documentation: "https://docs.debridge.finance/",
  },
  platformToken: "DBRiDgJAMsM95moTzJs7M9LnkGErpbv9v6CUR1DXnUu5",
  tags: ["tool", "bridge", "dapp"],
};

export const contracts: ContractRaw[] = [
  { name: "DeBridge", address: "DEbrdGj3HsRsAzx6uH4MKyREKxVAfBydijLUF3ygsFfh" },
  { name: "Vault", address: "DeDRoPXNyHRJSagxZBBqs4hLAAM1bGKgxh7cyfuNCBpo" },
  { name: "Airdrop", address: "DBrLFG4dco1xNC5Aarbt3KEaKaJ5rBYHwysqZoeqsSFE" },
  { name: "Bridge", address: "src5qyZHqTqecJV4aY6Cb6zDZLMDzrDKKezs22MPHr4" },
  { name: "Bridge", address: "dst5MGcFPoBeREFAA5E3tU5ij8m5uVYwkzkSAbsLbNo" },
];
