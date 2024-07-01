import { Schema, model } from "mongoose";

const WordSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Word", WordSchema);
