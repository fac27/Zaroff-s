import {
  select_all_islands,
  select_one_island,
  select_all_regions,
} from "../utils/models/islands.js";

export function getAllIslands() {
  const allIslands = select_all_islands.all();
  return {
    params: allIslands,
  };
}

export function getIslandData(name) {
  const stringName = name.toString();
  return select_one_island.get({ name: stringName });
}

export function getAllRegions() {
  return select_all_regions.all();
}
