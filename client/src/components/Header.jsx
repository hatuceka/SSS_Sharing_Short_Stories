import { Link } from 'react-router-dom'

const Header = () => {


  return (
    <header>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/new-story'>Create A Story</Link>
      </nav>
    </header>
  )
}

export default Header