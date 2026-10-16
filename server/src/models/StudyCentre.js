import mongoose from "mongoose";

// IGNOU hierarchy: state -> regional centre (RC) -> learner support / study centre (LSC).
const studyCentreSchema = new mongoose.Schema(
  {
    state: { type: String, required: true, trim: true, index: true },
    regionalCentre: { type: String, required: true, trim: true, index: true },
    name: { type: String, required: true, trim: true },
    code: { type: String, trim: true },
    city: { type: String, trim: true },
    supportsBCA: { type: Boolean, default: true },
    // Only set to true after checking against IGNOU's official list.
    verified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

studyCentreSchema.index({ regionalCentre: 1, code: 1 }, { unique: true, sparse: true });

export const StudyCentre =
  mongoose.models.StudyCentre || mongoose.model("StudyCentre", studyCentreSchema);
