import jwt from "jsonwebtoken";
import { config } from "../config.js";
import { User } from "../models/User.js";

export const COOKIE_NAME = "bcawale_token";

export function signToken(userId) {
  return jwt.sign({ sub: userId }, config.JWT_SECRET, {
    expiresIn: config.JWT_EXPIRES_IN,
  });
}

export function setAuthCookie(res, token) {
  res.cookie(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: config.NODE_ENV === "production",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
}

export function clearAuthCookie(res) {
  res.clearCookie(COOKIE_NAME, {
    httpOnly: true,
    sameSite: "lax",
    secure: config.NODE_ENV === "production",
  });
}

export async function requireAuth(req, res, next) {
  try {
    const token = req.cookies?.[COOKIE_NAME];
    if (!token) return res.status(401).json({ error: "Login required" });

    let payload;
    try {
      payload = jwt.verify(token, config.JWT_SECRET);
    } catch {
      return res.status(401).json({ error: "Session expired, login again" });
    }

    const user = await User.findById(payload.sub);
    if (!user || user.isBanned) {
      return res.status(401).json({ error: "Account not available" });
    }

    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
}

export function requireAdmin(req, res, next) {
  if (req.user?.role !== "admin") {
    return res.status(403).json({ error: "Admins only" });
  }
  next();
}
