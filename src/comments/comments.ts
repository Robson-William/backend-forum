import {serial, integer, text, timestamp, pgTable } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { users } from "../users/users";
import { boards } from "../boards/Boards";

export const comments = pgTable("comments", {
    id: serial("id").primaryKey(),
    content: text("content"),
    date: timestamp("date", {withTimezone: true}),
    authorId: integer("author_id").notNull(),
    boardId: integer("board").notNull()
})

export const commentsRelations = relations(comments, ({one}) => ({
    author: one(users, {fields: [comments.authorId], references: [users.id]}),
    board: one(boards, {fields: [comments.boardId], references: [boards.id]})
}))