import axios from 'axios'
import { useState, useEffect } from 'react'
import CommentForm from './CommentForm'
//import { BASE_URL, API_KEY } from '../globals'
//import { POSTER_PATH } from '../globals'

const StoryDetails = ({ selectedStory, setSelectedStory }) => {
  const [storyDetails, setStoryDetails] = useState({})
  const [comment, setComments] = useState([])

  const getCommentForm = async () => {
    try {
      let res = await axios.get('http://localhost:3001/new-comment')
      console.log(res.data)
      setComments(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const getStoryDetails = async () => {
      const response = await axios.get(
        `http://localhost:3001/story/:id`
        //`${BASE_URL}/movie/${selectedMovie}?api_key=${API_KEY}`
      )
      setStoryDetails(response.data)
    }
getCommentForm()
    getStoryDetails()
  }, [selectedStory])




  return (
    <div className="details">
      <h2 className="author">Author: {storyDetails.user}</h2>
      <h1 className="content">{storyDetails.title}</h1>
      <img src={storyDetails.image} />
      <p className="content">{storyDetails.text}</p>
      <div>
                  <CommentForm getCommentForm={getCommentForm} />
                  <h3>{comment.user}</h3>
                  <p>{comment.text}</p>
                </div>
      <button onClick={() => setSelectedStory(null)}>Back</button>
    </div>
  )
}

export default StoryDetails