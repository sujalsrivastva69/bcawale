import { Router } from "express";
import { StudyCentre } from "../models/StudyCentre.js";

const router = Router();

// GET /api/centres/states -> ["Uttar Pradesh", ...]
router.get("/states", async (req, res, next) => {
  try {
    const states = await StudyCentre.distinct("state", { supportsBCA: true });
    res.json({ states: states.sort() });
  } catch (err) {
    next(err);
  }
});

// GET /api/centres/regional?state=Uttar%20Pradesh -> ["Lucknow", ...]
router.get("/regional", async (req, res, next) => {
  try {
    const state = String(req.query.state ?? "");
    if (!state) return res.status(400).json({ error: "state is required" });
    const rcs = await StudyCentre.distinct("regionalCentre", {
      state,
      supportsBCA: true,
    });
    res.json({ regionalCentres: rcs.sort() });
  } catch (err) {
    next(err);
  }
});

// GET /api/centres?state=...&regionalCentre=... -> study centres
router.get("/", async (req, res, next) => {
  try {
    const filter = { supportsBCA: true };
    if (req.query.state) filter.state = String(req.query.state);
    if (req.query.regionalCentre) {
      filter.regionalCentre = String(req.query.regionalCentre);
    }
    const centres = await StudyCentre.find(filter).sort({ name: 1 }).limit(500).lean();
    res.json({
      centres: centres.map((c) => ({
        id: c._id.toString(),
        state: c.state,
        regionalCentre: c.regionalCentre,
        name: c.name,
        code: c.code ?? null,
        city: c.city ?? null,
        verified: c.verified,
      })),
    });
  } catch (err) {
    next(err);
  }
});

export default router;
