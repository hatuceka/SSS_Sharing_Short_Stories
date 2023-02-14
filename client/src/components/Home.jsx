import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Search from './Search'
import StoryList from './StoryList'

const API_KEY = process.env.REACT_APP_API_KEY

const Home = () => {

const [stories, setStories] = useState([])
const [searchResults, setSearchResults] = useState([])
const [searched, toggleSearched] = useState(false)
const [searchQuery, setSearchQuery] = useState('')

useEffect(() => {
  const getStories = async () => {
    const response = await axios.get(`http://localhost:3001/stories`)
    setStories(response.data.results)
  }
  getStories()
}, [])

const getSearchResults = async (event) => {
event.preventDefault()
const response = await axios.get(`http://localhost:3001/stories?search=${searchQuery}`)
setSearchResults(response.data.results)
setSearchQuery('')
toggleSearched(true)
}

const handleChange = (event) => {
  setSearchQuery(event.target.value)
}

return (
  <div>
    <StoryList />
    <div className='search'>
      <Search value={searchQuery} onChange={handleChange} onSubmit={getSearchResults}/>
      {searched && (
        <div>
          <h1>Search Results</h1>
          <section className='search-results container-grid'>
            {searchResults.map((result) => (
              <Link to={`/story/:id/${result.id}`} key={result.id}>
            <StoryList {...result} image={result.image} />
            </Link>
            ))}
          </section>
        </div>
      )}
    </div>
    </div>
)
}

export default Home