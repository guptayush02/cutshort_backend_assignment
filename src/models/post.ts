const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    post: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Post", PostSchema);
