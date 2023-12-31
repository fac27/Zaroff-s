import {
  select_all_islands,
  select_one_island,
  select_all_regions,
  select_all_prices,
} from "../utils/models/islands.js";

export function getAllIslands() {
  return select_all_islands.all();
}

export function getIslandData(name) {
  const stringName = name.toString();
  return select_one_island.get({ name: stringName });
}

export function getAllRegions() {
  return select_all_regions.all();
}

export function getAllPrices() {
  return select_all_prices.all();
}
