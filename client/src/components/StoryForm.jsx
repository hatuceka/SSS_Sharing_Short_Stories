import { useState } from 'react'
import axios from 'axios'

const StoryForm = (props) => {

  const initialState = {
    user: '',
    title: '',
    text: ''
  }

const [storyFormState, setStoryFormState] = useState(initialState)

const handleChange = (event) => {
  setStoryFormState({ ...storyFormState, [event.target.id]: event.target.value })
}

const handleSubmit = async (event) => {
  event.preventDefault()
  await axios.post('http://localhost:3001/new-story', storyFormState)
  setStoryFormState(initialState)
 //props.getStoryForm()
}


return (
  <form  onSubmit={handleSubmit}>
    <div className="storyForm" >
    <label htmlFor="user">User Name</label>
    <input className="storyUser" type='text' id='user' onChange={handleChange} value={storyFormState.user}/>
    <label htmlFor="title">Title</label>
    <input className="storyTitle" type="title" id="title" onChange={handleChange} value={storyFormState.title}/>
    <label htmlFor="text">Story</label>
    <textarea className="storyText" id="text" cols="30" rows="10" onChange={handleChange} value={storyFormState.text}></textarea>
  <button type="submit">Submit</button>
  </div>
  </form>
)


}

export default StoryForm