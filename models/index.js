const mongoose = require('mongoose')
const StorySchema = require('./story')
const CommentSchema = require('./comment')

const Story = mongoose.model('Story', StorySchema)
const Comment = mongoose.model('Comment', CommentSchema)

module.exports = {
  Story,
  Comment
}
