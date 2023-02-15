import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import CommentForm from './CommentForm'
//import { BASE_URL, API_KEY } from '../globals'
//import { POSTER_PATH } from '../globals'

// const StoryDetails = () => {

  // const [storyDetails, setStoryDetails] = useState({})
  // const [comment, setComments] = useState([])

  // const getCommentForm = async () => {
  //   try {
  //     let res = await axios.get('http://localhost:3001/new-comment')
  //     console.log(res.data)
  //     setComments(res.data)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // let { storyId } = useParams()

  // useEffect(() => {
  //   let isCancelled = false
  //   const getStoryDetails = async () => {
  //     const response = await axios.get(
  //       `https://localhost:3001/story/${storyId}`
  //     )
  //     if (!isCancelled) {
  //       setStoryDetails(response.data)
  //     }
  //   }
  //   getCommentForm()
  //   getStoryDetails()
  //   return () => {
  //     isCancelled = true
  //   }
  // }, [storyId])



const StoryDetails = ({ selectedStory, setSelectedStory }) => {
let comment = []
  const initialState = {
    user: '',
    title: '',
    text: ''
  }
  const [storyDetails, setStoryDetails] = useState({})
  const { id } = useParams()
  const [comments, setComments] = useState(initialState)

  // const getComments = async () => {
  //   try {
  //     let res = await axios.get(`http://localhost:3001/story/${id}/comments`)
  //     console.log(res.data)
  //     setComments(res.data)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  const handleChange = (event) => {
    setComments({ ...comments, [event.comments.id]: event.comments.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post(`http://localhost:3001/story/${id}/new-comment`, comments)
    setComments(initialState)
  }

  useEffect(() => {
    const getStoryDetails = async () => {
      const response = await axios.get(
        `http://localhost:3001/story/${id}`
      
      )
      setStoryDetails(response.data.story)
      console.log(response)
     
    }
//getComments()
//handleChange()
//handleSubmit()
    getStoryDetails()
  }, [])
const showComments = () => {
  if (storyDetails.comments) {
    comment = storyDetails.comments.map((comment) => {
  return ( <div key= {comment._id}> {comment.user} {comment.text} </div>)

})
  } else {
  comment = []
  }}
  showComments()
  
console.log(storyDetails)
  return (
    <div className="details">
      {storyDetails.comments && 
      <div>
     
      <h2 className="author">Author: {storyDetails?.user}</h2>
      <h1 className="content">{storyDetails?.title}</h1>
      <img src={storyDetails?.image} />
      <p className="content">{storyDetails?.text}</p>
      <div>{comment}</div>
      <div>
                  <CommentForm onChange={handleChange} onSubmit={handleSubmit}  />
                  <h3>{comments.user}</h3>
                  <p>{comments.text}</p>
                </div>
                <Link to='/' className='back'>Back to Home</Link>
      {/* <button onClick={() => setStoryDetails(null)}>Back</button> */}
      </div>
      }</div>

  )
    
}
export default StoryDetails