import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import accessEnv from "#root/helpers/accessEnv";

import trim from "./middlewares/trim";
import authRoutes from "./routes/auth";
import postRoutes from "./routes/posts";
import subRoutes from "./routes/subs";

const PORT = parseInt(accessEnv("PORT", "5000"), 10);

const startServer = () => {
  const app = express();

  app.use(express.json());
  app.use(morgan("dev"));
  app.use(trim);
  app.use(cookieParser());

  app.use(
    cors({
      origin: (_origin, cb) => cb(null, true),
      credentials: true,
    })
  );

  app.get("/", (_req, res) => res.send("Hello World"));
  app.use("/api/auth", authRoutes);
  app.use("/api/posts", postRoutes);
  app.use("/api/subs", subRoutes);

  app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    return res.status(500).json({ message: err.message });
  });

  app.listen(PORT, "0.0.0.0", () => {
    console.info(`Server running at  http://localhost:${PORT}`);
  });
};

export default startServer;
