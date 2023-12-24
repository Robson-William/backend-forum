import {config} from "dotenv";
config();

export const {
    PORT,
    POSTGRES_NAME,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_URL
} = process.env as { [key: string]: string };

const required = {
    PORT: PORT || "3000",
    POSTGRES_NAME,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_URL
}

for(let key in required){
    if(!required[key as keyof typeof required]){
        throw new Error("Missing required env variable " + key);
    }
}