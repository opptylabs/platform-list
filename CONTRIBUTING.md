# Contributing Guide

Thank you for your interest in contributing to the Platform List! This guide will help you add new platforms and smart contracts to the registry.

## Table of Contents

- [Getting Started](#getting-started)
- [Adding a New Platform](#adding-a-new-platform)
- [Platform Structure](#platform-structure)
- [Contracts](#contracts)
- [Global Rules](#global-rules)
- [Testing](#testing)
- [Submitting Your Contribution](#submitting-your-contribution)

## Getting Started

1. Fork the repository
2. Clone your fork locally
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a new branch for your platform:
   ```bash
   git checkout -b add-platform-yourplatform
   ```

## Adding a New Platform

To add a new platform to the registry, you need to:

1. Create a platform file in [src/platforms/](src/platforms/)
2. Add a platform image in the [img/](img/) directory
3. Define contracts (if applicable)

### Step 1: Create Platform File

Create a new TypeScript file in `src/platforms/` named after your platform ID (e.g., `myplatform.ts`):

```typescript
import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "myplatform",
  name: "My Platform",
  description: "A brief description of what your platform does",
  defiLlamaId: "your-defillama-id", // Optional
  links: {
    website: "https://myplatform.io/",
    twitter: "https://x.com/MyPlatform",
    discord: "https://discord.gg/myplatform", // Optional
    telegram: "https://t.me/myplatform", // Optional
    github: "https://github.com/myplatform", // Optional
    medium: "https://medium.com/@myplatform", // Optional
    documentation: "https://docs.myplatform.io/", // Optional
  },
  tokens: ["TokenMintAddress1", "TokenMintAddress2"], // Optional
  tags: ["dapp", "dex"], // See available tags below
  addedAt: 1767268800000, // The timestamp of the day of addition to the list
};

export const contracts: ContractRaw[] = [];
```

### Step 2: Add Platform Image

Add a logo image for your platform in the `img/` directory:

- **File name**: Must match your platform ID exactly (e.g., `myplatform.webp`)
- **Format**: `.webp`
- **Dimensions**: Exactly **64x64 pixels**

You can convert images to WebP format using tools like:

- Online: [Squoosh](https://squoosh.app/)
- CLI: `cwebp input.png -o output.webp`

## Platform Structure

### Platform Metadata

| Field          | Type          | Required | Description                                     |
| -------------- | ------------- | -------- | ----------------------------------------------- |
| `id`           | string        | Yes      | Unique identifier (lowercase, no spaces)        |
| `name`         | string        | Yes      | Display name of the platform                    |
| `description`  | string        | No       | Brief neutral description of the platform       |
| `defiLlamaId`  | string        | No       | DefiLlama protocol ID                           |
| `isDeprecated` | boolean       | No       | Mark platform as deprecated (defaults to false) |
| `tokens`       | string[]      | No       | Array of token mint addresses                   |
| `tags`         | PlatformTag[] | Yes      | Platform categories, 1 to 2 max (see below)     |
| `links`        | object        | Yes      | Social links and resources                      |
| `addedAt`      | number        | No       | The timestamp (in ms) of your PR                |

### Available Tags

Choose **1 to 2 tags** (maximum 2) that best describe your platform:

- `tool` - Utility or infrastructure tool
- `cex` - Centralized exchange
- `nft-collection` - NFT collection
- `nft-marketplace` - NFT marketplace
- `gaming` - Gaming platform
- `bridge` - Cross-chain bridge
- `dao` - Decentralized autonomous organization
- `memecoin` - Memecoin project
- `stablecoin` - Stablecoin issuer
- `wallet` - Wallet provider
- `launchpad` - Token launchpad
- `dex` - Decentralized exchange
- `social` - Social platform
- `depin` - Decentralized physical infrastructure
- `fitness` - Fitness/health platform
- `lending` - Lending and borrowing protocol
- `rwa` - Real world assets
- `institutional` - Institutional-grade platform
- `prediction` - Prediction market
- `infrastructure` - Blockchain infrastructure
- `vault` - Vault or yield aggregator
- `ai` - AI-related platform
- `restaking` - Restaking protocol
- `payments` - Payment solution
- `oracle` - Oracle provider
- `bitcoin` - Bitcoin-related protocol
- `card` - Card or spending solution
- `privacy` - Privacy-focused protocol
- `learn` - Educational / developer learning resource
- `liquid-staking` - Liquid staking protocol

## Contracts

Contracts are the platform's on-chain program addresses. Each contract has just a
`name` and an `address`; the `platformId` is injected automatically when the index
is generated.

### One Contract

```typescript
export const contracts: ContractRaw[] = [
  { name: "Swap", address: "YourProgramPublicKeyHere" },
];
```

### Multiple Contracts

```typescript
export const contracts: ContractRaw[] = [
  { name: "Swap", address: "SwapProgramAddress" },
  { name: "Staking", address: "StakingProgramAddress" },
  { name: "Lending", address: "LendingProgramAddress" },
];
```

## Global Rules

Please follow these rules when contributing:

### 1. Image Requirements

- **Format**: All images MUST be in `.webp` format
- **Dimensions**: All images MUST be exactly **64x64 pixels**
- **File name**: Must match the platform ID exactly
- **Location**: Place in the `img/` directory

### 2. Naming Conventions

- **Platform IDs**: Always in lowercase, use hyphens for spaces (e.g., `my-platform`)
- **File names**: Match platform ID exactly (e.g., `my-platform.ts`, `my-platform.webp`)

### 3. Code Quality

- Use TypeScript types provided by the library (`PlatformRaw`, `ContractRaw`)
- Follow the existing code structure and patterns
- Ensure all required fields are filled
- Validate contract addresses are correct
- Use **at most 2 tags** per platform (1 minimum)
- Always export `contracts` as a named export (empty array if there are none)

## Testing

Before submitting your contribution, run the test suite:

```bash
# Run tests
npm test

# Build the project
npm run build

# Generate platform index
npm run build:index
```

Make sure all tests pass and there are no TypeScript errors.

## Submitting Your Contribution

1. Commit your changes:

   ```bash
   git add .
   git commit -m "feat: add [platform-name] platform"
   ```

2. Push to your fork:

   ```bash
   git push origin add-platform-yourplatform
   ```

3. Create a Pull Request on GitHub with:

   - Clear title: "Add [Platform Name] platform"
   - Description including:
     - Platform website
     - What contracts you're adding
     - Any special considerations

4. Wait for review and address any feedback

## Complete Example

Here's a complete example of a platform file with all the elements:

```typescript
import { PlatformRaw, ContractRaw } from "../types";
// Platform definition
export const platform: PlatformRaw = {
  id: "jupiter-governance",
  name: "Jupiter DAO",
  description: "The first voting platform for Cats in history.",
  links: {
    website: "https://vote.jup.ag/",
    twitter: "https://x.com/jup_dao",
  },
  tokens: ["JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN"],
  tags: ["dao", "dapp"],
};

// Flat list of the platform's on-chain program addresses.
export const contracts: ContractRaw[] = [
  {
    name: "Governance",
    address: "GovaE4iu227srtG2s3tZzB4RmWBzw8sTwrCLZz7kN7rY",
  },
  {
    name: "Locker Vote",
    address: "voTpe3tHQ7AjQHMapgSue2HJFAh2cGsdokqN3XqmVSj",
  },
  {
    name: "ASR Distributor",
    address: "Dis2TfkFnXFkrtvAktEkw37sdb7qwJgY6H7YZJwk51wK",
  },
];
```

**Key points from this example:**

- Platform ID is lowercase (`jupiter-governance`)
- Each contract is a flat `{ name, address }` entry
- `platformId` is added automatically at index-generation time
- Image file should be at `img/jupiter-governance.webp` (400x400 pixels, .webp format)

## Questions?

If you have questions or need help:

- Open an issue on GitHub
- Check existing platforms for examples
- Review the TypeScript types in [src/types.ts](src/types.ts)

Thank you for contributing to the Jupiter Platform List!
