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
  <form onSubmit={handleSubmit}>
    <label htmlFor="user">User Name</label>
    <input type='text' id='user' onChange={handleChange} value={storyFormState.user}/>
    <label htmlFor="title">Title</label>
    <input type="title" id="title" onChange={handleChange} value={storyFormState.title}/>
    <label htmlFor="text">Story</label>
    <textarea id="text" cols="30" rows="10" onChange={handleChange} value={storyFormState.text}></textarea>
  <button type="submit">Submit</button>
  </form>
)


}

export default StoryForm