import axios from 'axios'
import { useState, useEffect } from 'react'
//import { BASE_URL, API_KEY } from '../globals'
//import { POSTER_PATH } from '../globals'

const StoryDetails = ({ selectedStory, setSelectedStory }) => {
  const [storyDetails, setStoryDetails] = useState({})

  useEffect(() => {
    const getStoryDetails = async () => {
      const response = await axios.get(
        `http://localhost:3001/story/:id`
        //`${BASE_URL}/movie/${selectedMovie}?api_key=${API_KEY}`
      )
      setStoryDetails(response.data)
    }

    getStoryDetails()
  }, [selectedStory])

  return (
    <div className="details">
      <h2 className="author">Author: {storyDetails.user}</h2>
      <h1 className="content">{storyDetails.title}</h1>
      <img src={storyDetails.image} alt="image" />
      <p className="content">{storyDetails.text}</p>
      <button onClick={() => setSelectedStory(null)}>Back</button>
    </div>
  )
}

export default StoryDetails