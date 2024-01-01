import { integer, varchar, serial, index, text, pgTable, timestamp } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { users } from "../users/usersSchema";
import { comments } from "../comments/commentsSchema";

export const boards = pgTable('boards', {
    id: serial('id').primaryKey(),
    title: varchar('title', {length: 100}),
    content: text('content'),
    date: timestamp('timestamp', {withTimezone: true}),
    authorId: integer('author_id').notNull()
}, (table) => {
    return {
        titleIdx: index("title_idx").on(table.title)
    }
})

export type Board = typeof boards.$inferSelect; 

export const boardsRelations = relations(boards, ({one, many}) => ({
    author: one(users, {fields: [boards.authorId], references: [users.id]}),
    comments: many(comments)
}))