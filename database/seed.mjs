// eslint-disable-next-line import/no-extraneous-dependencies
import 'dotenv/config';
import { readFileSync } from 'fs';
import { join } from 'path';
import db from './db.mjs';

const seedPath = join('database', 'seed.sql');
const seed = readFileSync(seedPath, 'utf-8');

db.exec(seed);

console.log(
  '\u001b[33;1m',
  `The database file ${process.env.DB_FILE} as been seeded with example data.`
);