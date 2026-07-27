import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "futarchy",
  name: "MetaDAO",
  description:
    "MetaDAO is a DAO that uses prediction markets to make decisions.",
  links: {
    website: "https://metadao.fi/",
    discord: "https://discord.com/invite/metadao",
    twitter: "https://x.com/MetaDAOProject",
    github: "https://github.com/metaDAOproject",
    documentation: "https://docs.metadao.fi/",
  },
  defiLlamaId: "metadao",
  platformToken: "METAwkXcqyXKy1AtsSgJ8JiUHwGCafnZL38n3vYmeta",
  tokens: ["METADDFL6wWMWEoKTFJwcThTbUmtarRJZjRpzUvkxhr"],
  tags: ["dao"],
};

export const contracts: ContractRaw[] = [
  {
    name: "Launchpad",
    address: "AfJJJ5UqxhBKoE3grkKAZZsoXDE9kncbMKvqSHGsCNrE",
  },
  {
    name: "Futarchy DAO",
    address: "autoQP9RmUNkzzKRXsMkWicDVZ3h29vvyMDcAYjCxxg",
  },
  {
    name: "Conditional Vault",
    address: "VLTX1ishMBbcX3rdBWGssxawAo1Q2X2qxYFYqiGodVg",
  },
  { name: "AMM", address: "AMMyu265tkBpRW21iGQxKGLaves3gKm2JcMUqfXNSpqD" },
  { name: "ICO", address: "moontUzsdepotRGe5xsfip7vLPTJnVuafqdUWexVnPM" },
];
