import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "wormhole",
  name: "Wormhole",
  description:
    "Wormhole is a cross-chain messaging protocol enabling asset and data transfers between Solana and over 30 other blockchains.",
  links: {
    website: "https://wormhole.com/",
    discord: "https://discord.com/invite/wormholecrypto",
    telegram: "https://t.me/wormholecrypto",
    twitter: "https://x.com/wormhole",
    github: "https://github.com/wormhole-foundation",
    documentation: "https://wormhole.com/docs/",
  },
  platformToken: "85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ",
  tags: ["bridge"],
  tokens: [
    "3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh",
    "7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs",
  ],
};

export const contracts: ContractRaw[] = [
  {
    name: "Legacy Staking",
    address: "sspu65omPW2zJGWDxmx8btqxudHezoQHSGZmnW8jbVz",
  },
  { name: "Staking", address: "MGoV9M6YUsdhJzjzH9JMCW2tRe1LLxF1CjwqKC7DR1B" },
  {
    name: "tBTC Bridge",
    address: "87MEvHZCXE3ML5rrmh5uX1FbShHmRXXS32xJDGbQ7h5t",
  },
  { name: "Core", address: "worm2ZoG2kUd4vFXhvjh93UUH596ayRfgQ2MgjNMTth" },
  { name: "Main", address: "HDwcJBJXjL9FpJ7UBsYBtaDjsBUhuLCUYoz3zr8SWWaQ" },
  {
    name: "Token Bridge",
    address: "wormDTUJ6AWPNvk59vGQbDvGJmqbDTdgWgAqcLBCgUb",
  },
  {
    name: "Token Bridge Relayer",
    address: "3vxKRPwUTiEkeUVyoZ9MXFe1V71sRLbLqu1gRYaWmehQ",
  },
];
