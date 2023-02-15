import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const CommentForm = () => {

  const initialState = {
    user: '',
    text: ''
  }

const [commentFormState, setCommentFormState] = useState(initialState)
const { id } = useParams()

const handleChange = (event) => {
  setCommentFormState({ ...commentFormState, [event.target.id]: event.target.value })
}

const handleSubmit = async (event) => {
  event.preventDefault()
  await axios.post(`http://localhost:3001/story/${id}/new-comment`, commentFormState)
  setCommentFormState(initialState)
 //props.getCommentForm()
}


return (
  <form className="commentForm" onSubmit={handleSubmit}>
    <div>
  <label htmlFor="user">User Name</label>
    <input className="commentUser" type='text' id='user' onChange={handleChange} value={commentFormState.user}/>
    <label htmlFor="text"></label>
    <textarea className="commentText" id="text" cols="30" rows="10" onChange={handleChange} value={commentFormState.text}></textarea>
  <button type="submit">Comment</button>
  </div>
  </form>
)


}

export default CommentForm