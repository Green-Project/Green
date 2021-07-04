import { Router } from "https://deno.land/x/oak/mod.ts";
import { signup, login} from "./controllers/authController.ts"
import { getSuggestedTrees } from "./controllers/aiController.ts"
import { Session } from "https://deno.land/x/session@1.1.0/mod.ts";

const session = new Session({framework: "oak"});
await session.init();

const routes = new Router();

/**
 * Checks if the user is connected, and redirects if he's not.
 * Modify the array if you want to limit the access of an endpoint.
*/
routes.use([], async (context, next) => {
    if (!(await context.state.session.get("username")))
        context.response.redirect("/login");
    else
        await next();
})

routes.get("/", (context) => {
    context.response.body = "Green's application server. If you are not from the development team, you shouldn't be here :s";
});

routes.get("/register", (context) => {
    const username = context.request.url.searchParams.get('username');
    const password = context.request.url.searchParams.get('password');

    if (username && password) {
        if (signup(username, password)) {
            console.log("User added successfully.");
            context.response.body = `Username: ${username}\nPassword: ${password}`;
        }
    } else {
        context.response.body = "There was an error during registration. Please try again and verify the informations."
        context.response.status = 400;
    }
});

routes.get("/suggested_trees", async (context) => {
    const humidity = context.request.url.searchParams.get('humidity');
    const sunshine = context.request.url.searchParams.get('sunshine');
    const grass_type = context.request.url.searchParams.get('grass_type');
    const wind_force = context.request.url.searchParams.get('wind_force');

    if (humidity && sunshine && grass_type && wind_force) {
        try {
            const res = await getSuggestedTrees({
                humidity: humidity,
                sunshine: sunshine,
                grass_type: grass_type,
                wind_force: wind_force
            })

            console.log("Got a response from IA API:")
            console.log(res)

            console.log("Forwarding responde ...")
            context.response.body = res;
            context.response.status = 200;

        } catch (error){
            context.response.body = error;
            context.response.status = 400;
        }

    }

})

routes.post("/login", async (context) => {
    const formData = await context.request.body({type: "form-data"}).value.read();
    const username = formData.fields.username;
    const password = formData.fields.password;


    if (await login(username, password)) {
        await context.state.session.set("username", username);
        context.response.body = "Logged in. Welcome " + username + " !";
        context.response.status = 200;
    } else {
        context.response.body = "Invalid username / password combination.";
        context.response.status = 400;
    }
});

routes.get("/logout", async (context) => {
    if (await context.state.session.get("username")) {
        await context.state.session.set("username", "");
        context.response.redirect("/");
    } else {
        context.response.body= "Something went wrong...";
        context.response.status = 400;
    }
})

export { routes, session };