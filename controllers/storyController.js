const { app } = require('express')

const getStories = (req, res) => {
  res.send({
    message: 'Stories gotten.'
  })
}

const postNewStory = (req, res) => {
  res.send({
    message: 'New story posted!'
  })
}

const updateStory = (req, res) => {
  res.send({
    message: 'Story updated.'
  })
}

const deleteStory = (req, res) => {
  res.send({
    message: 'Story successfully deleted!'
  })
}

const findStoryByTitle = (req, res) => {
  res.send({
    message: `The story titled ${req.query.storyTitle} is found.`
  })
}

const findStoryById = (req, res) => {
  res.send({
    message: `The story with an id of ${req.params.id} found.`
  })
}

module.exports = {
  getStories,
  postNewStory,
  updateStory,
  deleteStory,
  findStoryByTitle,
  findStoryById
}
