import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { POSTGRES_URL } from "../env";
import { users } from "../users/usersSchema";
import { boards } from "../boards/boardsSchema";
import { comments } from "../comments/commentsSchema";

// Query database
const connection = postgres(POSTGRES_URL);
const db = drizzle(connection, {schema: {users, boards, comments}});

export { db, connection }