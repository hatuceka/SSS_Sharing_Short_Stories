import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import CommentForm from './CommentForm'
import EditCommentForm from './EditCommentForm'

const StoryDetails = () => {
let comment = []
  const initialState = {
    user: '',
    title: '',
    text: ''
  }
  const [storyDetails, setStoryDetails] = useState({})
  const { id } = useParams()
  //const { commentId } = useParams()
  const [comments, setComments] = useState({})
  const [editingComment, setEditingComment] = useState(null)
const [showEditForm, setShowEditForm] = useState(false)




  const handleChange = (event) => {
    setComments({ ...comments, [event.target.id]: event.target.value })
  }

  const handleDelete = async (commentId) => {
    await axios.delete(`http://localhost:3001/story/${id}/delete-comment/${commentId}`, null)
    //setComments(initialState)
    const response = await axios.get(`http://localhost:3001/story/${id}`)
    setStoryDetails(response.data.story)
  }

  const handleEdit = (comment) => {
    setEditingComment(comment)
    setShowEditForm(true)
  }
  
  const handleEditSubmit = async (event) => {
    event.preventDefault()
    await axios.put(`http://localhost:3001/story/${id}/update-comment/${editingComment._id}`, editingComment)
    setEditingComment(null)
    setShowEditForm(false)
    //setComments(initialState)
    //Reload the story details to update the comment list
    const response = await axios.get(`http://localhost:3001/story/${id}`)
    setStoryDetails(response.data.story)
  }
  

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post(`http://localhost:3001/story/${id}/new-comment`, comments)
    setComments([])
    const response = await axios.get(`http://localhost:3001/story/${id}`)
    setStoryDetails(response.data.story)
    
    // setStoryDetails(prevState => {
    //   const updatedComments = prevState.comments.filter(comment => comment._id !== commentId)
    //   return {
    //     ...prevState,
    //     comments: updatedComments
    // }
    
    // })
  }

  useEffect(() => {
    const getStoryDetails = async () => {
      const response = await axios.get(
        `http://localhost:3001/story/${id}`
      
      )
      setStoryDetails(response.data.story)
      // console.log(response)
     
    }

    getStoryDetails()
  }, [id])

// const onChange = (event) => {
//   setEditingComment({ ...editingComment, [event.target.name]: event.target.value })
// }


const showComments = () => {
  if (storyDetails.comments) {
    comment = storyDetails.comments.map((comment) => {
  return ( <div
    className="allComments"
    key= {comment._id}>
        <form className="commentForm" onSubmit={handleEditSubmit}>
    <div>
  <label htmlFor="user"></label>
    <input className="commentUser" placeholder="User Name" type='text' id='user' onChange={handleChange} value={comment.user}/>
    <label htmlFor="text"></label>
    <input className="commentText" placeholder="Comment" id="text" onChange={handleChange} value={comment.text}></input>
  <button className="commentButton" type="submit">Comment</button>
  </div>
  </form>

      {/* <div className="submittedUser">{comment.user}</div> 
      <div className="submittedComment">{comment.text}</div>  */}
      <button onClick={() => handleDelete(comment._id)} type="button" >X</button>
      <button className="update" onClick={() => handleEdit(comment)} type="button" >Edit</button>
      </div>)

})
  } else {
  comment = []
  }}
  showComments()

  

  return (
    <div className="details">
      {storyDetails.comments && 
      <div>
     
      <h2 className="author">Author: {storyDetails.user}</h2>
      <h1 className="content">{storyDetails.title}</h1>
      <img src={storyDetails.image} />
      
      <p className="content">{storyDetails.text}</p>


      <div >{comment}</div>
      {/* {showEditForm && (
  <CommentForm
    onChange={(event) => setEditingComment({ ...editingComment, [event.target.name]: event.target.value })}
    onSubmit={handleEditSubmit}
    onCancel={() => setShowEditForm(false)}
    submitLabel="Save"
    comment={editingComment}
  />
)} */}
 {!editingComment && (
      <div >
                  <CommentForm onChange={handleChange} onSubmit={handleSubmit}  />
                  <h3>{comments.user}</h3>
                  <p>{comments.text}</p>
                </div>
 )}

                <Link to='/' className='back'>Back to Home</Link>
  
      </div>
      }</div>

  )
    
}
export default StoryDetails