const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comment = new Schema(
  {
    text: { type: String, required: true },
    user: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Comment', Comment)
