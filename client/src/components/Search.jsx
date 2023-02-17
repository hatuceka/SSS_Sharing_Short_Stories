const Search = (props) => {

  return (
    <div className="searching">
    <form onSubmit={ props.onSubmit}>
      <div className="searchDiv">
<input className='searchInput'
  type="text"
  name="search"
  value={props.value}
  placeholder="Search Stories"
  onChange={props.onChange}
></input>
<button className="searchButton" type='submit'>Search</button>
</div>
    </form>
    <button className="clear" onClick={props.clearSearch} >Clear</button>
    </div>
  )
}

export default Search
