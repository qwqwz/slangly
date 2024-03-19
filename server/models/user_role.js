import { Schema, model } from 'mongoose';

const UserRoleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    permissions: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default model('UserRole', UserRoleSchema);
