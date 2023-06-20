import db  from "../../database/db.mjs"

// export function select_one_island
export const select_one_island = db.prepare(/*sql*/ `
SELECT *
FROM islands
WHERE islands.id = $id
`)

// export function select_all_islands
export const select_all_islands = db.prepare(/*sql*/ `
    SELECT *
    FROM islands
`)