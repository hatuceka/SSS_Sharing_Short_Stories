import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import StoryForm from './components/StoryForm'
import CommentForm from './components/CommentForm'
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
  )
}

export default App
