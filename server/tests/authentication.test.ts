import { assertEquals } from "https://deno.land/std@0.97.0/testing/asserts.ts";
import { db, UserSchema } from "./testing_database.ts";
import { signup, login} from "../src/controllers/authController.ts"

Deno.test("It creates a new user", async() => {
    const start = await db.collection<UserSchema>("userTest").find();
    assertEquals((await start.toArray()).length, 0);
    assertEquals(await signup("TestUser", "TestPassword"), true);
    const end = await db.collection<UserSchema>("userTest").find()
    assertEquals((await end.toArray()).length, 1);
    console.log(await end.toArray());
});