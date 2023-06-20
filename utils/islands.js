import { select_all_islands, select_one_island } from "./models/islands.js";

export function getAllIslands() {
  const allIslands = select_all_islands.all();
  return {
    params: allIslands,
  };
}

export function getIslandData(name) {
  return select_one_island.get({name});
}