import { integer, varchar, serial, index, text, pgTable, timestamp } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const boards = pgTable('boards', {
    id: serial('id').primaryKey(),
    title: varchar('title', {length: 100}),
    content: text('content'),
    date: timestamp('timestamp', {withTimezone: true}),
    authorId: integer('author_id').notNull()
})

export const boardsRelations = relations(boards, ({one}) => {
    author: one(users, {fields: [boards.authorId], references: [users.id]})
})