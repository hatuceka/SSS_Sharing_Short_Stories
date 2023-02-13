const { app } = require('express')
const { Comment, Story } = require('../models')

const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find()
    return res.status(200).json({ comments })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createComment = async (req, res) => {
  try {
    const storyId = req.params.id
    const comment = await new Comment(req.body)
    await comment.save()
    const story = await Story.findById(storyId)
    story.comments.push(comment._id)
    await Story.findByIdAndUpdate(storyId, story)
    return res.status(201).json({
      comment
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const findCommentById = async (req, res) => {
  try {
    const { id } = req.params
    const comment = await Comment.findById(id)
    if (comment) {
      return res.status(200).json({ comment })
    }
    return res.status(404).send('Comment with the specified ID does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(comment)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteComment = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Comment.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Comment deleted')
    }
    throw new Error('Comment not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllComments,
  createComment,
  findCommentById,
  updateComment,
  deleteComment
}
