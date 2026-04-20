import { Hono } from "hono";

export const postRouter = new Hono()
  .get("/", (c) => {
    return c.json([]);
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
  .delete("/:id", (c) => {
    return c.json({ message: "" });
  });
