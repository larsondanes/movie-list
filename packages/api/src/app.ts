import * as Koa from "koa";
import { routes } from "./hello-world";

const app = new Koa();

app.use(routes);
app.use(async ctx => {
    ctx.body = "Hello World";
});

app.listen(3000);