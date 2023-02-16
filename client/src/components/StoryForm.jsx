import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const StoryForm = (props) => {

  const initialState = {
    user: '',
    title: '',
    text: '',
    image: ''
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
  <div>
  <form  onSubmit={handleSubmit}>
    <div className="storyForm" >
    <label htmlFor="user">User Name</label>
    <input className="storyUser" type='text' id='user' onChange={handleChange} value={storyFormState.user}/>
    <label htmlFor="title">Title</label>
    <input className="storyTitle" type="title" id="title" onChange={handleChange} value={storyFormState.title}/>
    <label htmlFor="text">Story</label>
    <textarea className="storyText" id="text" onChange={handleChange} value={storyFormState.text}></textarea>
  <label htmlFor="image">Image URL</label>
  <input className="storyImage" id="image" onChange={handleChange} value={storyFormState.image}></input>
  <button type="submit">Submit</button>
  </div>
  </form>
  <Link to='/' className='back'>Back to Home</Link>
  </div>
)


}

export default StoryForm