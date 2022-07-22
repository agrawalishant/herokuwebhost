var mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    blogId: { type: String },
    comment: { type: String },
    status: { type: String } 
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", CommentSchema);;
