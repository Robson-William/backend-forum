import { serial, integer, varchar, text, timestamp, index, pgTable } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { boards } from "../boards/boardsSchema";
import { comments } from "../comments/commentsSchema";

export const users = pgTable('users', {
    id: serial("id").primaryKey(),
    name: varchar("name", {length: 58}),
    username: varchar("username", {length: 20}),
    email: varchar("email", {length: 100}),
    picture: text("picture"),
    createdAt: timestamp("created_at", {withTimezone: true}),
    pontuation: integer("pontuation").default(0)
}, (table) => {
    return {
        nameIdx: index("name_idx").on(table.name),
        usernameIdx: index("username_idx").on(table.username)
    }
})

export type User = typeof users.$inferSelect; 

export const usersRelation = relations(users, ({many}) => ({
    boards: many(boards),
    comments: many(comments)
}))