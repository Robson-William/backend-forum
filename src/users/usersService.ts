import { eq, like } from "drizzle-orm";
import { db } from "../config/database";
import { User, users } from "./usersSchema";

type Params = {
    data: User,
    filter: string | number
}

async function createUser({data}:Params){
    try {
        const newUser = await db.insert(users).values({
            name: data.name, 
            username: data.username, 
            email: data.email, 
            picture: data.picture
        })

        return newUser;
    } catch(err){
        console.log("Error at createUser: ", err)
    }
}

async function updateUser({data}:Params){
    try {
        const updatedUser = await db.update(users).set({
            name: data.name,
            username: data.username,
            email: data.email,
            picture: data.picture
        }).where(eq(users.id, data.id))

        return updatedUser;
    } catch(err){
        console.log("Error at updateUser: ", err)
    }
}

async function addPontuation(id:number){
    try {
        const updatedPontuation = await db.update(users).set({
            pontuation: +10
        }).where(eq(users.id, id))

        return updatedPontuation;
    } catch(err){
        console.log("Error at addPontuation: ", err);
    }
}

async function deleteUser(id:number){
    try {
        const deletedUser = await db.delete(users).where(eq(users.id, id)).returning()

        return deletedUser;
    } catch(err){
        console.log("Error at deleteUser: ", err);
    }
}

async function searchAllUsers(){
    try {
        const allUsers = await db.select().from(users);

        return allUsers; // Array of users
    } catch(err){
        console.log("Error at searchAllUsers: ", err)
    }
}

async function searchById(id:number){
    try {
        const filteredUser = await db.select().from(users).where(eq(users.id, id))

        return filteredUser;
    } catch(err){
        console.log("Error at searchById", err);
    }
}

async function searchByUsername(username:string){
    try {
        const filteredUser = await db.select().from(users).where(eq(users.username, username));

        return filteredUser;
    } catch(err){
        console.log("Error at searchByUsername", err);
    }
}

async function searchByText(filter:string){
    try {
        const filteredUser = await db.select().from(users).where(like(users.username, `%${filter}%`));

        return filteredUser;
    } catch(err){
        console.log("Error at searchByUsername", err);
    }
}

export {createUser, updateUser, addPontuation, deleteUser, searchAllUsers, searchById, searchByUsername, searchByText};