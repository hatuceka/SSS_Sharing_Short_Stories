import { Link } from 'react-router-dom'

const About = () => {


  return (
    <div>
      <h1>About SSS</h1>
      <p>
        SSS (Sharing Short Stories) is a public platform you can create your own stories. 
      </p>
      <Link to='/' className='back'>Back to Home</Link>
    </div>
  )
}

export default About