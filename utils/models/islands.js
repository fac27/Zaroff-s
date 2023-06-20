import db from "../../database/db.mjs";

// export function select_one_island
export const select_one_island = db.prepare(/*sql*/ `
    SELECT *
    FROM islands
    WHERE name = $name
`);

// export function select_all_islands
export const select_all_islands = db.prepare(/*sql*/ `
    SELECT *
    FROM islands
`);

export const select_all_regions = db.prepare(/*sql*/ `
    SELECT region
    FROM islands
`);
