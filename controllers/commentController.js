const { app } = require('express')

const getComments = (req, res) => {
  res.send({
    message: 'Comments gotten.'
  })
}

const postNewComment = (req, res) => {
  res.send({
    message: 'New comment posted.'
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
  getComments,
  postNewComment,
  updateComment,
  deleteComment
}
