import { Hono } from "hono";

const app = new Hono()
  .get("/archives/:id", (c) => {
    return c.redirect(`https://oucc.org/blog/articles/${c.req.param("id")}`);
  })
  .get("/", (c) => {
    const id = c.req.query("p");
    return id
      ? c.redirect(`https://oucc.org/blog/articles/${id}`)
      : c.redirect("https://oucc.org/blog");
  })
  .get("*", (c) => {
    return c.redirect("https://oucc.org/blog");
  });

export default app;
