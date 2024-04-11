import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const staffSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      requied: [true, "name is required"],
    },
    email: {
        type: String,
        required: [true, " Email is Required"],
        unique: true,
        validate: validator.isEmail,
      },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    password: {
        type: String,
        required: [true, "password is required"],
        minlength: [6, "Password length should be greater than 6 character"],
        select: true,
      },
    // createdBy: {
    //   type: mongoose.Types.ObjectId,
    //   ref: "Eyerusalem",
    // },
  },
  { timestamps: true }
);

// middelwares
staffSchema.pre("save", async function () {
    if (!this.isModified) return;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  });

export default mongoose.model("staff", staffSchema);