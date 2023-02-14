import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import StoryForm from './components/StoryForm'
import CommentForm from './components/CommentForm'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import StoryDetails from './components/StoryDetails'

//import story from './components/StoryForm'
const App = (props) => {
  const [story, setStories] = useState([])

  const getStoryForm = async () => {
    try {
      let res = await axios.get('http://localhost:3001/stories')
      console.log(res.data)
      setStories(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getStoryForm()
  }, [])

  const [comment, setComments] = useState([])

  const getCommentForm = async () => {
    try {
      let res = await axios.get('http://localhost:3001/comments')
      console.log(res.data)
      setComments(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getCommentForm()
  }, [])

  return (
    <div>
      <Header>
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="story/:id" element={<StoryDetails />} />
            <Route
              path="new-story"
              element={
                <div>
                  <StoryForm getStoryForm={getStoryForm} />
                  <h1>{story.user}</h1>
                  <h2>{story.title}</h2>
                  <p>{story.text}</p>
                  <div>
                    <CommentForm getCommentForm={getCommentForm} />
                    <h3>{comment.user}</h3>
                    <p>{comment.text}</p>
                  </div>
                </div>
              }
            />
          </Routes>
        </main>
      </Header>
    </div>
  )
}

export default App
