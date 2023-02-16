import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const EditCommentForm = (props) => {

 
//const { id } = useParams()


return (
  <form className="commentForm" onSubmit={props.onSubmit}>
    <div>
  <label htmlFor="user"></label>
    <input className="commentUser" placeholder="User Name" type='text' id='user' onChange={props.onChange} value={props.comment.user}/>
    <label htmlFor="text"></label>
    <input className="commentText" placeholder="Comment" id="text" onChange={props.onChange} value={props.comment.text}></input>
  <button className="commentButton" type="submit">Comment</button>
  </div>
  </form>
)


}

export default EditCommentForm