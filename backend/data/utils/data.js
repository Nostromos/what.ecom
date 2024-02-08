// Dotenv setup. With all the testing, I had to point dotenv to the file. Once complete, dotenv config will happen at index.
// TODO Remove dotenv config here when this is ready to deploy.
import dotenv from 'dotenv';
dotenv.config({ path: '/Users/figgefenk/Dev/Codecademy/what.ecom/backend/.env' });

import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: 'localhost',
  port: process.env.PGPORT,
  database: process.env.PGDATABASE
});

export default function query(text, params, callback) {
  console.info(`Query Received with -\n Text: ${text}\n Params: ${params}\nCallback: ${callback}`);
  return pool.query(text, params, callback);
}