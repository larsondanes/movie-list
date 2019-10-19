import * as Router from "koa-router";

const router = new Router();

router.get("/", async (ctx) => {
    ctx.body = "Poop and pee.";
});

router.get("/hello-world", async (ctx) => {
    ctx.body = { 
        "author": "Larson Danes",
        "app": "movie-list",
        "message": "This is the movie list app!"
    };
});

export const routes = router.routes();