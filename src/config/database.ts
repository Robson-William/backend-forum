import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import { POSTGRES_URL } from "../env";

// Migrations
// const migrationClient = postgres(`postgres://${DB_USER}:${DB_PASSWORD}@postgres:5432/${DB_NAME}`, {max: 1});
// migrate(drizzle(migrationClient), ...);

// Query database
const queryClient = postgres(POSTGRES_URL);
const db = drizzle(queryClient);

export { db }