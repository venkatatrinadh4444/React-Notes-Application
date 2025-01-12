
import './index.css'

const Card = props => {
  const {title, description} = props.cardData
  return (
    <li className='CardContainer'>
      <h1 className='CardHeading'>{title}</h1>
      <p className='CardDescription'>{description}</p>
    </li>
  )
}

export default Card
