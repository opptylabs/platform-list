import { Contract, Platform } from "./types";

export async function fetchPlatforms(): Promise<Platform[]> {
  const response = await fetch(
    "https://github.com/opptylabs/platform-list/releases/latest/download/platforms.json",
  );
  if (!response.ok) {
    throw new Error("Failed to fetch platforms");
  }
  const data: Platform[] = await response.json();
  return data;
}

export async function fetchContracts(): Promise<Contract[]> {
  const response = await fetch(
    "https://github.com/opptylabs/platform-list/releases/latest/download/contracts.json",
  );
  if (!response.ok) {
    throw new Error("Failed to fetch contracts");
  }
  const data: Contract[] = await response.json();
  return data;
}
