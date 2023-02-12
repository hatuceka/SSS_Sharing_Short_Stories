const express = require('express')
require('dotenv').config()
const routes = require('./routes')
const db = require('./db')
const cors = require('cors')
//const logger = require('morgan')

const commentController = require('./controllers/commentController')
const storyController = require('./controllers/storyController')

// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//app.use(logger('dev'))

// app.use() middleware here ^ ///////////////////

app.use('/api', routes)

app.get('/', (req, res) => {
  res.send({ msg: 'Server Running!' })
})

app.get('/comments', commentController.getAllComments)
app.get('/stories', storyController.getAllStories)
app.post('/new-comment', commentController.createComment)
app.put('/update-comment', commentController.updateComment)
app.delete('/delete-comment', commentController.deleteComment)
app.post('/new-story', storyController.createStory)
app.put('/update-story', storyController.updateStory)
app.delete('/delete-story', storyController.deleteStory)
app.get('/find', storyController.findStoryByTitle)
app.get('/story/:id', storyController.findStoryById)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
