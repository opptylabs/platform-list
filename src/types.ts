export type Platform = {
  id: string;
  name: string;
  image: string;
  description?: string;
  defiLlamaId?: string;
  isDeprecated: boolean;
  addedAt?: number;
  platformToken?: string;
  tokens?: string[];
  tags: PlatformTag[];
  parentId?: string;
  links: {
    website: string;
    discord?: string;
    telegram?: string;
    twitter?: string;
    github?: string;
    medium?: string;
    documentation?: string;
  };
};

export type PlatformTag =
  | "tool"
  | "cex"
  | "nft-collection"
  | "nft-marketplace"
  | "gaming"
  | "bridge"
  | "dao"
  | "memecoin"
  | "stablecoin"
  | "wallet"
  | "launchpad"
  | "dex"
  | "social"
  | "depin"
  | "fitness"
  | "lending"
  | "rwa"
  | "institutional"
  | "prediction"
  | "infrastructure"
  | "vault"
  | "ai"
  | "restaking"
  | "payments"
  | "oracle"
  | "bitcoin"
  | "card"
  | "privacy"
  | "explorer"
  | "learn"
  | "liquid-staking";

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export type PlatformRaw = Omit<Optional<Platform, "isDeprecated">, "image">;

/**
 * Represents a smart contract/program
 */
export type Contract = {
  name: string;
  address: string;
  platformId: string;
};

export type ContractRaw = Omit<Contract, "platformId">;
