// These tests cover validation, auth guards and cookie behaviour. They do not
// need MongoDB: every request here is rejected before any database call.
import "./setup.js";
import { test } from "node:test";
import assert from "node:assert/strict";
import request from "supertest";
import jwt from "jsonwebtoken";
import { createApp } from "../src/app.js";

const app = createApp();

test("health check works", async () => {
  const res = await request(app).get("/api/health");
  assert.equal(res.status, 200);
  assert.equal(res.body.ok, true);
});

test("signup rejects a short password", async () => {
  const res = await request(app)
    .post("/api/auth/signup")
    .send({ email: "a@b.com", password: "short", displayName: "Rohit" });
  assert.equal(res.status, 400);
  assert.ok(res.body.details.some((d) => d.field === "password"));
});

test("signup rejects an invalid email", async () => {
  const res = await request(app)
    .post("/api/auth/signup")
    .send({ email: "not-an-email", password: "longenough1", displayName: "Rohit" });
  assert.equal(res.status, 400);
});

test("signup rejects out-of-range semester", async () => {
  const res = await request(app).post("/api/auth/signup").send({
    email: "a@b.com",
    password: "longenough1",
    displayName: "Rohit",
    semester: 9,
  });
  assert.equal(res.status, 400);
});

test("login requires a password", async () => {
  const res = await request(app)
    .post("/api/auth/login")
    .send({ email: "a@b.com" });
  assert.equal(res.status, 400);
});

test("/me without a cookie is 401", async () => {
  const res = await request(app).get("/api/auth/me");
  assert.equal(res.status, 401);
});

test("/me with a garbage token is 401", async () => {
  const res = await request(app)
    .get("/api/auth/me")
    .set("Cookie", "bcawale_token=garbage");
  assert.equal(res.status, 401);
});

test("/me with a token signed by the wrong secret is 401", async () => {
  const forged = jwt.sign({ sub: "507f1f77bcf86cd799439011" }, "wrong-secret");
  const res = await request(app)
    .get("/api/auth/me")
    .set("Cookie", `bcawale_token=${forged}`);
  assert.equal(res.status, 401);
});

test("profile update requires login", async () => {
  const res = await request(app).patch("/api/profile").send({ semester: 3 });
  assert.equal(res.status, 401);
});

test("logout clears the cookie", async () => {
  const res = await request(app).post("/api/auth/logout");
  assert.equal(res.status, 200);
  const cookie = (res.headers["set-cookie"] ?? []).join(";");
  assert.match(cookie, /bcawale_token=;/);
});

test("unknown route is 404 JSON", async () => {
  const res = await request(app).get("/api/nope");
  assert.equal(res.status, 404);
});

test("malformed JSON is 400, not 500", async () => {
  const res = await request(app)
    .post("/api/auth/login")
    .set("Content-Type", "application/json")
    .send("{bad json");
  assert.equal(res.status, 400);
});
