import { Hono } from "hono";
import { prisma } from "../../prisma.js"
import { zValidator } from "@hono/zod-validator";
import { createPostSchema, updatePostSchema } from "./schema.js";

export const postRouter = new Hono()
  .get("/", async (c) => {
    const posts = await prisma.post.findMany()
    return c.json(posts);
  })
  .get("/:id", async (c) => {
    const id = c.req.param("id")
    const posts = await prisma.post.findUnique({
      where: {
        id: Number(id)
      }
    })

    if(!posts){
      return c.json({ message: "Blog Post not found" }, 404)
    }

    return c.json(posts);
  })
  .post("/", zValidator("json", createPostSchema), async (c) => {
    const body = c.req.valid("json")
    const newPost = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content
      }
    })
    return c.json(newPost, 201);
  })
  .patch("/:id", zValidator("json", updatePostSchema), async (c) => {
    const id = c.req.param("id")
    const body = c.req.valid("json")

    const updatePost = await prisma.post.update({
      where: {
        id: Number(id)
      },
      data: {
        title: body.title,
        content: body.content
      }
    })

    return c.json(updatePost);
  })
  .delete("/:id", (c) => {
    return c.json({ message: "Blog Post deleted successfully" })
  })
  .post("/:id/mark-as-published", async (c) => {
    const id = c.req.param("id")
    const updatePost = await prisma.post.update({
      where: {
        id: Number(id)
      },
      data: {
        publish: true
      }
    })
    
    return c.json(updatePost)
  })