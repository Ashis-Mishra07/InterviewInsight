import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const dbUrl = process.env.NEXT_PUBLIC_DRIZZLE_DB_URL;

if (!dbUrl) {
  throw new Error("Database URL is not provided in environment variables.");
}

const sql = neon(dbUrl);
export const db = drizzle(sql, { schema });
