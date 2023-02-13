import { useState } from 'react'
import axios from 'axios'

const CommentForm = () => {

  const initialState = {
    user: '',
    text: ''
  }

const [commentFormState, setCommentFormState] = useState(initialState)

const handleChange = (event) => {
  setCommentFormState({ ...commentFormState, [event.target.id]: event.target.value })
}

const handleSubmit = async (event) => {
  event.preventDefault()
  await axios.post('http://localhost:3001/new-comment', commentFormState)
  setCommentFormState(initialState)
 //props.getCommentForm()
}


return (
  <form onSubmit={handleSubmit}>
  <label htmlFor="user">User Name</label>
    <input type='text' id='user' onChange={handleChange} value={commentFormState.user}/>
    <label htmlFor="text"></label>
    <textarea id="text" cols="30" rows="10" onChange={handleChange} value={commentFormState.text}></textarea>
  <button type="submit">Comment</button>
  </form>
)


}

export default CommentForm