const Search = (props) => {

  return (
    <div className="searching">
    <form onSubmit={ props.onSubmit}>
<input className='search-input'
  type="text"
  name="search"
  value={props.value}
  placeholder="Search Stories"
  onChange={props.onChange}
></input>
<button type='submit'>Search</button>

    </form>
    <button onClick={props.clearSearch} >Clear Search</button>
    </div>
  )
}

export default Search
