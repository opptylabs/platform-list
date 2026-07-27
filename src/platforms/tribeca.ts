import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "tribeca",
  name: "Tribeca",
  description: "Onchain Governance.",
  tags: ["dao"],
  links: {
    website: "https://tribeca.so/gov/",
    twitter: "https://x.com/thesaberdao",
    github: "https://github.com/saberdao/tribeca",
  },
};

export const contracts: ContractRaw[] = [
  { name: "Locker", address: "LocktDzaV1W2Bm9DeZeiyz4J9zs4fRqNiYqQyracRXw" },
  {
    name: "Governance",
    address: "Govz1VyoyLD5BL6CSCxUJLVLsQHRwjfFj1prNsdNg5Jw",
  },
];
