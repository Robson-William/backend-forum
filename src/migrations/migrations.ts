import {migrate} from "drizzle-orm/postgres-js/migrator";
import { db, connection } from "../config/database";

try {
    await migrate(db, {migrationsFolder: "./drizzle"});

    await connection.end();
} catch(err){
    console.log("Migration error: ", err)
}