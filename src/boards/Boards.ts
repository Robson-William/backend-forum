import { integer, varchar, serial, index, text, pgTable, timestamp } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { users } from "../users/users";
import { comments } from "../comments/comments";

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

export const boardsRelations = relations(boards, ({one, many}) => ({
    author: one(users, {fields: [boards.authorId], references: [users.id]}),
    comments: many(comments)
}))