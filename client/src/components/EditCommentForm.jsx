import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const EditCommentForm = ({ comment, id }) => {
  const [updateComment, setUpdateComment] = useState(comment)

  const handleChange = (event) => {
    console.log(event.target)
// const {name, value} = event.target
setUpdateComment({
  ...updateComment,
  [event.target.name]:event.target.value
})
  }

  const updateCommentCall = async (event) => {
event.preventDefault()
await axios.put(`http://localhost:3001/story/${id}/update-comment/${comment._id}`, updateComment)
  }



//const { id } = useParams()


return (
  <form className="commentForm" onSubmit={updateCommentCall}>
    <div>
  <label htmlFor="user"></label>
    <input className="commentUser" name="user" placeholder="User Name" type="text" id="user" onChange={handleChange} value={updateComment.user}/>
    <label htmlFor="text"></label>
    <input className="commentText" name="text" placeholder="Comment" type="text" id="text" onChange={handleChange} value={updateComment.text}></input>
  <button className="editButton" type="submit">Save</button>
  </div>
  </form>
)


}

export default EditCommentForm