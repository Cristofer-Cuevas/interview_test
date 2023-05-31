import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
  user: "cristofer-cuevas",
  password: "Ilikeprogramming07",
  host: "localhost",
  database: "interview_test",
  port: 5432,
});

export default pool;
