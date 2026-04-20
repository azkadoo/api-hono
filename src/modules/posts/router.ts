import { Hono } from "hono";
import { prisma } from "../../prisma.js"

export const postRouter = new Hono()
  .get("/", async (c) => {
    const posts = await prisma.post.findMany()
    return c.json(posts);
  })
  .get("/:id", (c) => {
    return c.json({});
  })
  .post("/", (c) => {
    return c.json({ message: "" }, 201);
  })
  .patch("/:id", (c) => {
    return c.json({});
  })
//   .delete("/:id", (c) => {
//     return c.json({ message: "" });
//   });