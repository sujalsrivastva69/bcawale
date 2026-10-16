import { Router } from "express";
import mongoose from "mongoose";
import { z } from "zod";
import { User, STATES, BACKLOG_BUCKETS, HUMOUR_MODES } from "../models/User.js";
import { StudyCentre } from "../models/StudyCentre.js";
import { requireAuth } from "../middleware/auth.js";
import { validate } from "../middleware/validate.js";

const router = Router();

// Only these fields can be changed by the user. role/isBanned/email are not here.
const updateSchema = z
  .object({
    displayName: z.string().trim().min(2).max(40),
    semester: z.coerce.number().int().min(1).max(6),
    state: z.enum(STATES),
    backlogBucket: z.enum(BACKLOG_BUCKETS),
    humour: z.enum(HUMOUR_MODES),
    matchOptIn: z.boolean(),
    studyCentre: z
      .string()
      .refine((v) => mongoose.isValidObjectId(v), "Invalid study centre id")
      .nullable(),
  })
  .partial()
  .strict();

router.patch("/", requireAuth, validate(updateSchema), async (req, res, next) => {
  try {
    const { studyCentre, ...rest } = req.body;
    const user = req.user;

    Object.assign(user, rest);

    if (studyCentre !== undefined) {
      if (studyCentre === null) {
        user.studyCentre = undefined;
      } else {
        const centre = await StudyCentre.exists({ _id: studyCentre });
        if (!centre) return res.status(400).json({ error: "Study centre not found" });
        user.studyCentre = studyCentre;
      }
    }

    await user.save();
    res.json({ user: user.toPublic() });
  } catch (err) {
    next(err);
  }
});

export default router;
