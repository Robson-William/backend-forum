import { eq, like } from "drizzle-orm";
import { db } from "../config/database";
import { Board, boards } from "./boardsSchema";

type Params = {
    data: Board
}

async function createBoard({data}:Params){
    try {
        const newBoard = await db.insert(boards).values({
            title: data.title,
            content: data.content,
            authorId: data.authorId
        }).returning();

        return newBoard;
    } catch(err){
        console.log("Error at createBoard: ", err);
    }
}

async function updateBoard({data}:Params){
    try {
        const updatedBoard = await db.update(boards).set({
            title: data.title,
            content: data.content
        }).where(eq(boards.id, data.id) && eq(boards.authorId, data.authorId)).returning();

        return updatedBoard;
    } catch(err){
        console.log("Error at updateBoard: ", err);
    }
}

async function deleteBoard({data}:Params){
    try {
        const deletedBoard = await db.delete(boards)
        .where(eq(boards.id, data.id) && eq(boards.authorId, data.authorId)).returning();

        return deletedBoard;
    } catch(err){
        console.log("Error at deleteBoard: ", err);
    }
}

async function searchAllBoards(){
    try {
        const allBoards = await db.select().from(boards);

        return allBoards;
    } catch(err){
        console.log("Error at searchAllBoards: ", err);
    }
}

async function searchBoardById({data}:Params){
    try {
        const board = await db.select().from(boards).where(eq(boards.id, data.id));

        return board;
    } catch(err){
        console.log("Error at searchBoardById: ", err)
    }
}

async function searchBoardByText(filter:string){
    try {
        const filteredBoards = await db.select().from(boards)
        .where(like(boards.title, filter) || like(boards.content, filter));

        return filteredBoards;
    } catch(err){
        console.log("Error at searchBoardText: ", err);
    }
}

export {createBoard, updateBoard, deleteBoard, searchAllBoards, searchBoardById, searchBoardByText};