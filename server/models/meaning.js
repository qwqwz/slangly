import { Schema, model } from 'mongoose';

const MeaningSchema = new Schema(
  {
    author_id: {
      type: String,
      required: true,
    },
    word_id: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    publish: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default model('Meaning', MeaningSchema);
