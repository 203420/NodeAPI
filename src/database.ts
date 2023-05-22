import { Pool } from "pg";

const config = {
  host: "localhost",
  port: 5433,
  user: "postgres",
  database: "api_ts",
  password: "postgres",
};

export const pool = new Pool(config);
