import { db, UserSchema } from "../database.ts";
import * as bcrypt from "https://deno.land/x/bcrypt@v0.2.4/mod.ts";

const salt = await bcrypt.genSalt(10);

/** 
 * Register a new user.
 * @param username
 * @param password - This is gonna be hashed before inserting into the database.
 * 
 * @returns True or false, if the user was inserted successfully or not.
 */
export async function signup(username: string, password: string)
{
    const insertion = await db.collection<UserSchema>("user").insertOne({
        username: username,
        password: await bcrypt.hash(password, salt),
    });

    return insertion ? true : false;
}

/**
 * Checks if the user exists in the databse.
 * 
 * @param username 
 * @param password 
 * 
 * @returns Whether the user exists in database or not.
 */
export async function login(username: string, password: string)
{
    const user = await db.collection<UserSchema>("user").findOne({
        username: username,
    });

    const logged = await bcrypt.compare(password, user!.password);

    return logged ? true : false;
}