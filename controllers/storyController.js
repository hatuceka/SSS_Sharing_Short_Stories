const { app } = require('express')
const { Story } = require('../models')

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
    const stories = await Story.find().populate('comments')
    return res.status(200).json({ stories })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateStory = async (req, res) => {
  try {
    const story = await Story.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(story)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteStory = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Story.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Story deleted')
    }
    throw new Error('Story not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const findStoryById = async (req, res) => {
  try {
    const { id } = req.params
    const story = await Story.findById(id).populate('comments')
    if (story) {
      return res.status(200).json({ story })
    }
    return res.status(404).send('Story with the specified ID does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const findStory = async (req, res) => {
  try {
    console.log(req.query.search)
    const story = await Story.find({ title: req.query.search })
    if (story) {
      return res.status(200).json({ story })
    }
    return res.status(404).send('Story with the specified ID does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createStory,
  getAllStories,
  updateStory,
  deleteStory,
  findStoryById,
  findStory
}
