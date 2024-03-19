import { Schema, model } from 'mongoose';

const WordSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default model('Word', WordSchema);
