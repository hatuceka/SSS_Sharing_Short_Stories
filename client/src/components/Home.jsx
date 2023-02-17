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

  const handleGoBack = () => {
    window.location.href = '/'
  }

  const getStories = async () => {
    const response = await axios.get(`http://localhost:3001/stories`)
    setStories(response.data.stories)
  }
  useEffect(() => {
    getStories()
  }, [searched])

  const getSearchResults = async (event) => {
    event.preventDefault()
    const response = await axios.get(
      `http://localhost:3001/find-story?search=${searchQuery}`
    )
    const results = response.data.story.filter((story) =>
      story.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setSearchResults(results)
    setSearchQuery('')
    toggleSearched(true)
  }

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }
  const clearSearch = () => {
    setSearchResults([])
    toggleSearched(false)
  }
  return (
    <div className="search">
      <Search
        clearSearch={clearSearch}
        value={searchQuery}
        onChange={handleChange}
        onSubmit={getSearchResults}
      />
      {searched && searchResults.length === 0 && (
        <div>
          <p className="noResult">There is no matching result!</p>
          <button className="goBack" onClick={handleGoBack}>
            Back to Home
          </button>
        </div>
      )}
      {searchResults.length > 0 && (
        <div>
          <h1>Search Results</h1>
          <section className="search-results container-grid">
            {searchResults.map((result) => (
              <Link to={`/story/${result._id}`} key={result._id}>
                <StoryList stories={[result]} />
                <button onClick={handleGoBack}>Back to Home</button>
              </Link>
            ))}
          </section>
        </div>
      )}
      {!searched && <StoryList stories={stories} />}
    </div>
  )
}

export default Home
