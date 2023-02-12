import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import StoryForm from './components/StoryForm'
import story from 'story'
const App = () => {
  const [stories, setStories] = useState([])

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

  return (
    <div>
      <StoryForm getStoryForm={getStoryForm} />
      <h1>User Name {story.userName}</h1>
      {/* {stories.map((story) => (
        <div key={story._id}> */}
      <h2>Title {story.title}</h2>
      <p>Story {story.storyText}</p>
      {/* </div> */}
      {/* //))} */}
    </div>
  )
}

export default App
