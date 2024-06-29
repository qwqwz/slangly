import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    hashPassword: {
      type: String,
      required: true,
    },
    isActivated: {
      type: Boolean,
      required: false,
      default: false,
    },
    activationLink: {
      type: String,
    },
    avatar_url: String,
  },
  {
    timestamps: true,
  }
);

export default model("User", UserSchema);
