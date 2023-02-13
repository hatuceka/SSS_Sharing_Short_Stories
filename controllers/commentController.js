const { app } = require('express')
const Comment = require('../models/comment')

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
    const comment = await new Comment(req.body)
    await comment.save()
    return res.status(201).json({
      comment
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const findCommentById = (req, res) => {
  res.send({
    message: `The comment with an id of ${req.params.id} found.`
  })
}

const updateComment = (req, res) => {
  res.send({
    message: 'Comment updated.'
  })
}

const deleteComment = (req, res) => {
  res.send({
    message: 'Comment successfully deleted!'
  })
}

module.exports = {
  getAllComments,
  createComment,
  findCommentById,
  updateComment,
  deleteComment
}
