const StoryList = (props) => {

  return (
<div onClick={props.onClick} className="story-list">
      <div className="img-wrapper">
<img src={props.image} />
      </div>
      <div className="info-wrapper flex-col">
        <h3>{props.title}</h3>
      </div>
    </div>
  )
}

export default StoryList