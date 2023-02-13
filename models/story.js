const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Story = new Schema(
  {
    title: { type: String, required: true },
    text: { type: String, required: true },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    user: { type: String, required: true },
    image: { type: String }
  },
  { timestamps: true }
)

module.exports = Story
