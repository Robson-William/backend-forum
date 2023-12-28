import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { POSTGRES_URL } from "../env";

// Query database
const connection = postgres(POSTGRES_URL);
const db = drizzle(connection);

export { db, connection }