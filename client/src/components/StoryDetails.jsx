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
    // title: '',
    text: ''
  }
  const [storyDetails, setStoryDetails] = useState({})
  const { id } = useParams()
  //const { commentId } = useParams()
  const [comments, setComments] = useState(initialState)
  const [editingComment, setEditingComment] = useState(null)
  // const [showEditForm, setShowEditForm] = useState(false)

  const handleChange = (event) => {
    setComments({ ...comments, [event.target.id]: event.target.value })
  }

  const handleDelete = async (commentId) => {
    await axios.delete(
      `http://localhost:3001/story/${id}/delete-comment/${commentId}`,
      null
    )
    //setComments(initialState)
    const response = await axios.get(`http://localhost:3001/story/${id}`)
    setStoryDetails(response.data.story)
  }

  const handleEdit = (comment) => {
    setEditingComment(comment)
    // setShowEditForm(true)
  }

  const getStoryDetails = async () => {
    const response = await axios.get(`http://localhost:3001/story/${id}`)
    setStoryDetails(response.data.story)
    console.log(response)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(comments)
    await axios.post(`http://localhost:3001/story/${id}/new-comment`, comments)
    setComments(initialState)
    // const response = await axios.get(`http://localhost:3001/story/${id}`)
    // setStoryDetails(response.data.story)
    getStoryDetails()
  }

  useEffect(() => {
    getStoryDetails()
  }, [id])

  // const onChange = (event) => {
  //   setEditingComment({ ...editingComment, [event.target.name]: event.target.value })
  // }

  const showComments = () => {
    if (storyDetails.comments) {
      comment = storyDetails.comments.map((comment) => {
        return (
          <div className="allComments" key={comment._id}>
            {/* <form className="commentForm" onSubmit={handleEditSubmit}>
    <div>
  <label htmlFor="user"></label>
    <input className="commentUser" placeholder="User Name" type='text' id='user' onChange={handleChange} value={comment.user}/>
    <label htmlFor="text"></label>
    <input className="commentText" placeholder="Comment" id="text" onChange={handleChange} value={comment.text}></input> */}
            {/* <button className="commentButton" type="submit">Comment</button> */}
            {/*   
  </div>
  </form> */}
            <EditCommentForm comment={comment} />

            {/* <div className="submittedUser">{comment.user}</div> 
      <div className="submittedComment">{comment.text}</div>  */}
            <button onClick={() => handleDelete(comment._id)} type="button">
              X
            </button>
            <button
              className="editButton"
              onClick={() => handleEdit(comment)}
              type="button"
            >
              Edit
            </button>
          </div>
        )
      })
    } else {
      comment = []
    }
  }
  showComments()

  return (
    <div className="details">
      {storyDetails.comments && (
        <div>
          <h2 className="author">Author: {storyDetails.user}</h2>
          <h1 className="content">
            <i>{storyDetails.title}</i>
          </h1>
          <div className="storyPage">
            <p className="storyContent">
              {' '}
              <img className="storyImage" src={storyDetails.image} />{' '}
              {storyDetails.text}
            </p>
            {comment}
          </div>

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
            <div>
              <CommentForm
                comments={comments}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                getStoryDetails={getStoryDetails}
              />
              {/* <h3>{comments.user}</h3>
                  <p>{comments.text}</p> */}
            </div>
          )}

          <Link to="/" className="backDetails">
            Back to Home
          </Link>
        </div>
      )}
    </div>
  )
}
export default StoryDetails
