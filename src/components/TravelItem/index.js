import './index.css'

const TravelItem = props => {
  const {eachList} = props
  const {name, imageUrl, description} = eachList
  return (
    <li className="travel-item-container">
      <img className="card-img" src={imageUrl} alt={name} />
      <h1 className="card-heading">{name}</h1>
      <p className="card-discription">{description}</p>
    </li>
  )
}

export default TravelItem
