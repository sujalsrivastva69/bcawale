import "dotenv/config";
import { z } from "zod";

const isTest = process.env.NODE_ENV === "test";

const schema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PORT: z.coerce.number().default(4000),
  MONGODB_URI: z.string().min(1, "MONGODB_URI is required"),
  JWT_SECRET: z.string().min(32, "JWT_SECRET must be at least 32 characters"),
  JWT_EXPIRES_IN: z.string().default("7d"),
  CLIENT_ORIGIN: z.string().default("http://localhost:3000"),
});

const parsed = schema.safeParse(
  isTest
    ? {
        MONGODB_URI: "mongodb://localhost:27017/bcawale-test",
        JWT_SECRET: "test-secret-test-secret-test-secret-123",
        ...process.env,
      }
    : process.env
);

if (!parsed.success) {
  console.error("Invalid environment variables:");
  for (const issue of parsed.error.issues) {
    console.error(`  - ${issue.path.join(".")}: ${issue.message}`);
  }
  console.error("Copy server/.env.example to server/.env and fill it in.");
  process.exit(1);
}

export const config = parsed.data;
