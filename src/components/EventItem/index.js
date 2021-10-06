import './index.css'

const EventItem = props => {
  const {eventDetails, onClickImage} = props
  const {id, imageUrl, name, location} = eventDetails

  const onClickImageItem = () => {
    onClickImage(id)
  }

  return (
    <>
      <li className="list">
        <button className="button" type="button" onClick={onClickImageItem}>
          <img src={imageUrl} alt="logo" className="image" />
        </button>

        <h1 className="title">{name}</h1>
        <p className="location">{location}</p>
      </li>
    </>
  )
}

export default EventItem
