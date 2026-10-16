import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { config } from "./config.js";
import authRoutes from "./routes/auth.js";
import profileRoutes from "./routes/profile.js";
import centreRoutes from "./routes/centres.js";

export function createApp() {
  const app = express();

  app.set("trust proxy", 1);
  app.use(helmet());
  app.use(cors({ origin: config.CLIENT_ORIGIN, credentials: true }));
  app.use(express.json({ limit: "20kb" }));
  app.use(cookieParser());

  app.get("/api/health", (req, res) => res.json({ ok: true }));

  app.use("/api/auth", authRoutes);
  app.use("/api/profile", profileRoutes);
  app.use("/api/centres", centreRoutes);

  app.use((req, res) => res.status(404).json({ error: "Not found" }));

  // Central error handler.
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    if (err?.code === 11000) {
      return res.status(409).json({ error: "Email already registered" });
    }
    if (err?.type === "entity.parse.failed") {
      return res.status(400).json({ error: "Invalid JSON" });
    }
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  });

  return app;
}
