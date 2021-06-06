import { Bson, MongoClient } from "https://deno.land/x/mongo@v0.23.1/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

console.log(config().DB);

const client = new MongoClient();

await client.connect("mongodb://127.0.0.1:27017");

const db = client.database(config().DB);

export interface UserSchema {
    _id: { $oid: string };
    username: string;
    password: string;
}

export { db };