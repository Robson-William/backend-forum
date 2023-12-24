import {config} from "dotenv";
config()

export const {
    PORT
} = process.env as { [key: string]: string };

const required = {
    PORT: PORT || "3000"
}

for(let key in required){
    if(!required[key as keyof typeof required]){
        throw new Error("Missing required env variable " + key);
    }
}