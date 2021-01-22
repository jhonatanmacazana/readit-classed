import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import User from "#root/db/entities/User";
import accessEnv from "#root/helpers/accessEnv";

const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.token;
    if (!token) throw new Error("Unauthenticated");

    const { username }: any = jwt.verify(token, accessEnv("JWT_SECRET", ""));

    const user = await User.findOne({ username });

    if (!user) throw new Error("Unauthenticated");

    res.locals.user = user;

    return next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ error: "Unauthenticated" });
  }
};

export default auth;
