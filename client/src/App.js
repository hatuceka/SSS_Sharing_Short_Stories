import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import StoryForm from './components/StoryForm'
//import story from './components/StoryForm'
const App = () => {
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

  return (
    <div>
      <StoryForm getStoryForm={getStoryForm} />

      {/* {stories.map((story) => (
        <div key={story._id}> */}
      <h1>{story.userName}</h1>
      <h2>{story.title}</h2>
      <p>{story.storyText}</p>
    </div>
    //   ))}
    // </div>
  )
}

export default App
