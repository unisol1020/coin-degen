import { Elysia } from "elysia";

const app = new Elysia().get("/", () => process.env.DATABASE_URL).listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
