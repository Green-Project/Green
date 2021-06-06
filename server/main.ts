import { Application } from "https://deno.land/x/oak/mod.ts";
import { routes, session } from './src/routes.ts'

const Session = session;

const router = routes;

const app = new Application();

app.addEventListener("listen", ({hostname, port}) => {
    hostname = hostname ?? "localhost";
    console.log("Server is listening on: " + hostname + ":" + port);
});

app.use(Session.use()(session, {expires: 1}));
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({port: 8080});