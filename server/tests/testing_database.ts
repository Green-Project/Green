import { Bson, MongoClient } from "https://deno.land/x/mongo@v0.23.1/mod.ts";

const client = new MongoClient();

await client.connect("mongodb://127.0.0.1:27017");

const db = client.database("Green-test");

export interface UserSchema {
    _id: { $oid: string };
    username: string;
    password: string;
}

export { db };