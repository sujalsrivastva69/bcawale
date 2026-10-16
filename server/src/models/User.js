import mongoose from "mongoose";

export const STATES = ["UP", "BR", "DL", "HR", "RJ", "MP", "MH", "OT"];
export const BACKLOG_BUCKETS = ["0", "1", "2-3", "4+"];
export const HUMOUR_MODES = ["savage", "brainrot", "wholesome"];

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    passwordHash: { type: String, required: true, select: false },
    displayName: { type: String, required: true, trim: true, maxlength: 40 },

    semester: { type: Number, min: 1, max: 6 },
    state: { type: String, enum: STATES },
    backlogBucket: { type: String, enum: BACKLOG_BUCKETS },
    humour: { type: String, enum: HUMOUR_MODES, default: "wholesome" },
    studyCentre: { type: mongoose.Schema.Types.ObjectId, ref: "StudyCentre" },

    // Matching is strictly opt-in.
    matchOptIn: { type: Boolean, default: false },

    role: { type: String, enum: ["user", "admin"], default: "user" },
    isBanned: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Used by the matching query later.
userSchema.index({ matchOptIn: 1, semester: 1, backlogBucket: 1, studyCentre: 1 });

userSchema.methods.toPublic = function toPublic() {
  return {
    id: this._id.toString(),
    email: this.email,
    displayName: this.displayName,
    semester: this.semester ?? null,
    state: this.state ?? null,
    backlogBucket: this.backlogBucket ?? null,
    humour: this.humour,
    studyCentre: this.studyCentre?.toString() ?? null,
    matchOptIn: this.matchOptIn,
    role: this.role,
  };
};

export const User = mongoose.models.User || mongoose.model("User", userSchema);
