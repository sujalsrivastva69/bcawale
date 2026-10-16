import mongoose from "mongoose";
import { config } from "./config.js";
import { createApp } from "./app.js";

async function main() {
  await mongoose.connect(config.MONGODB_URI);
  console.log("MongoDB connected");

  const app = createApp();
  app.listen(config.PORT, () => {
    console.log(`BCAWale API running on http://localhost:${config.PORT}`);
  });
}

main().catch((err) => {
  console.error("Failed to start server:", err.message);
  process.exit(1);
});
