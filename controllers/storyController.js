const { app } = require('express')
const Story = require('../models/story')

const createStory = async (req, res) => {
  try {
    const story = await new Story(req.body)
    await story.save()
    return res.status(201).json({
      story
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllStories = async (req, res) => {
  try {
    const stories = await Story.find()
    return res.status(200).json({ stories })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// const postNewStory = (req, res) => {
//   res.send({
//     message: 'New story posted!'
//   })
// }

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
  createStory,
  getAllStories,
  //postNewStory,
  updateStory,
  deleteStory,
  findStoryByTitle,
  findStoryById
}
