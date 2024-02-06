import pg from 'pg';
const { Pool } = pg;
import 'dotenv/config';

const pool = new Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: 'localhost',
  port: process.env.PGPORT,
  database: process.env.PGDATABASE
});

export const query = (text, params, callback) => {
  return pool.query(text, params, callback);
};