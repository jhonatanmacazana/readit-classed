import { Request, Response, Router } from "express";

import auth from "#root/server/middlewares/auth";
import Post from "#root/db/entities/Post";
import Sub from "#root/db/entities/Sub";

const createPost = async (req: Request, res: Response) => {
  const { title, body, sub } = req.body;

  const user = res.locals.user;

  if (title == "") {
    return res.status(400).json({ title: "Title must not be empty" });
  }

  try {
    const subRecord = await Sub.findOneOrFail({ name: sub });

    const post = new Post({ title, body, user, sub: subRecord });

    await post.save();

    return res.json(post);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }

  return res.json();
};

const router = Router();

router.post("/", auth, createPost);

export default router;