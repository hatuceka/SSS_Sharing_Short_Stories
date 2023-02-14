import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import StoryForm from './components/StoryForm'
//import CommentForm from './components/CommentForm'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import StoryDetails from './components/StoryDetails'
//import StoryList from './components/StoryList'

//import story from './components/StoryForm'
const App = (props) => {
  //const [story, setStories] = useState([])

  // const getStoryForm = async () => {
  //   try {
  //     let res = await axios.get('http://localhost:3001/new-story')
  //     console.log(res.data)
  //     setStories(res.data)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

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

  // useEffect(() => {
  //   getStoryForm()
  //   // getCommentForm()
  // }, [])

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="story/:id" element={<StoryDetails />} />
          <Route path="new-story" element={<StoryForm />} />

          {/* // getStoryForm={getStoryForm}
              // {story.user}
              // {story.title}
              // {story.text}
            */}
        </Routes>
      </main>
    </div>
  )
}

export default App
