const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    task: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum : ['Create', 'Edit','Delete'],
      default: 'Create'
    },
    markComplete: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

export default mongoose.model("Todo", TodoSchema);
