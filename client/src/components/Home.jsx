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

const getStories = async () => {
    const response = await axios.get(`http://localhost:3001/stories`)
    setStories(response.data.stories)
  }
useEffect(() => {
  getStories()
}, [searched])

const getSearchResults = async (event) => {
event.preventDefault()
const response = await axios.get(`http://localhost:3001/find-story?search=${searchQuery}`)

setSearchResults(response.data.story)
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
  <div>
   
    <div className='search'>
    <Search
    clearSearch={clearSearch}
          value={searchQuery}
          onChange={handleChange}
          onSubmit={getSearchResults}
        />

        {searchResults.length &&
          (<div>
            <h1>Search Results</h1>
            <section className="search-results container-grid">
              {searchResults.map((result) => (
                <Link to={`/story/${result._id}`} key={result._id}> 
                  <StoryList
                   stories={searchResults}
                  />
                </Link>
                
              ))}
              
            </section>
          </div>)}
        {/* //  :
        // `The story you've searched couldn't be found!` */}
        
    </div>
    {!searched && <StoryList stories={stories} /> }
    
    </div>
)


}

export default Home