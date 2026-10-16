import { Router } from "express";
import bcrypt from "bcryptjs";
import rateLimit from "express-rate-limit";
import { z } from "zod";
import { User, STATES, BACKLOG_BUCKETS, HUMOUR_MODES } from "../models/User.js";
import {
  signToken,
  setAuthCookie,
  clearAuthCookie,
  requireAuth,
} from "../middleware/auth.js";
import { validate } from "../middleware/validate.js";

const router = Router();

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 30,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: { error: "Too many attempts, try again in a few minutes" },
});

const signupSchema = z.object({
  email: z.string().trim().toLowerCase().email().max(254),
  password: z.string().min(8, "Password must be at least 8 characters").max(72),
  displayName: z.string().trim().min(2).max(40),
  // Answers from the onboarding flow (all optional at signup).
  semester: z.coerce.number().int().min(1).max(6).optional(),
  state: z.enum(STATES).optional(),
  backlogBucket: z.enum(BACKLOG_BUCKETS).optional(),
  humour: z.enum(HUMOUR_MODES).optional(),
});

const loginSchema = z.object({
  email: z.string().trim().toLowerCase().email(),
  password: z.string().min(1).max(72),
});

// Compared against when the email does not exist, so response time does not
// reveal which emails are registered.
const DUMMY_HASH = bcrypt.hashSync("not-a-real-password", 10);

router.post("/signup", authLimiter, validate(signupSchema), async (req, res, next) => {
  try {
    const { password, ...rest } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);

    const user = await User.create({ ...rest, passwordHash });

    setAuthCookie(res, signToken(user.id));
    res.status(201).json({ user: user.toPublic() });
  } catch (err) {
    next(err);
  }
});

router.post("/login", authLimiter, validate(loginSchema), async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+passwordHash");

    const ok = await bcrypt.compare(password, user?.passwordHash ?? DUMMY_HASH);
    if (!user || !ok || user.isBanned) {
      return res.status(401).json({ error: "Wrong email or password" });
    }

    setAuthCookie(res, signToken(user.id));
    res.json({ user: user.toPublic() });
  } catch (err) {
    next(err);
  }
});

router.post("/logout", (req, res) => {
  clearAuthCookie(res);
  res.json({ ok: true });
});

router.get("/me", requireAuth, (req, res) => {
  res.json({ user: req.user.toPublic() });
});

export default router;
