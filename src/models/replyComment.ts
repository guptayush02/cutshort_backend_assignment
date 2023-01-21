const mongoose = require("mongoose");

const ReplyCommentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    commentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    },
    reply: {
      type: String
    }
  },
  { timestamps: true }
);

export default mongoose.model("ReplyComment", ReplyCommentSchema);
