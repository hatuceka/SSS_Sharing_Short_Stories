import { Link } from 'react-router-dom'

const About = () => {


 
  return (
    <div className="body">
      {/* <h1 className="aboutTitle">About SSS</h1> */}
      {/* <div className="about"> */}
      <p className="about">
        SSS (Sharing Short Stories) is a public platform you can create your own stories. Sometimes to find a beautiful bedtime story is hard. This blog is dedicated to all story lovers, both children and who feels like children.
      <div className="aboutLink">
        <Link to='/' className='back'>Back to Home</Link>
      </div>
      </p>
      {/* </div> */}
      
    </div>
  )
}

export default About