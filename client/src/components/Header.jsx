import { Link } from 'react-router-dom'

const Header = () => {


  return (
    <header>
      <nav >
        
        <Link className="link" to='/'><b>Home</b></Link>
        <Link className="link" to='/about'><b>About</b></Link>
        <Link className="link" to='/new-story'><b>Create A Story</b></Link>
        {/* <div className="searching" >
    <form onSubmit={ props.onSubmit}>
<input className='search-input'
  type="text"
  name="search"
  value={props.value}
  placeholder="Search Stories"
  onChange={props.onChange}
></input>
<button type='submit'>Search</button> */}
{/* 
    </form>
    <button onClick={props.clearSearch} >Clear Search</button>
    </div> */}

      </nav>
    </header>
  )
}

export default Header