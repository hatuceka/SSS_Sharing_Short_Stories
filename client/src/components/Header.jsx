import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <Link className="link" to="/">
          <b>Home</b>
        </Link>
        <Link className="link" to="/about">
          <b>About</b>
        </Link>
        <Link className="link" to="/new-story">
          <b>Create A Story</b>
        </Link>
      </nav>
    </header>
  )
}

export default Header
