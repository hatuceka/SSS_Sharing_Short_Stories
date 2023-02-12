const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const commentController = require('./controllers/commentController')
const storyController = require('./controllers/storyController')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))

app.get('/', (req, res) => {
  res.send({ msg: 'Server Running!' })
})

//app.get('/comments', commentController.getComments)
//app.get('/stories', storyController.getStories)

app.listen(PORT, () => console.log(`Server running on ${PORT}`))

// import logo from './logo.svg'
// import './App.css'

// function App() {
//   return <div className="App"></div>
// }

// export default App
