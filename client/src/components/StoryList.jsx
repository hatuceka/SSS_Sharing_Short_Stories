import { Link } from 'react-router-dom'


const StoryList = (props) => {


  return (

<div className="story-grid">
      {
      props.stories.map((story) => (
        <div className="story-card" key={story._id}>
          <Link to={`${story.id}`}>
          {/* <img style={{ display: 'block' }} src={story.img} alt={story.title} /> */}
          </Link>
          <h3>{story.title}</h3>
          <h3>{story.user}</h3>
          
          
        </div>
      ))}
    </div>



/* <div onClick={props.onClick} className="story-list">
      <div className="img-wrapper">
<img src={props.image} />
      </div>
      <div className="info-wrapper flex-col">
        <h3>{props.title}</h3>
      </div>
    </div> */
  )
      }

export default StoryList