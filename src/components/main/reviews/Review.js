import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faStar} from '@fortawesome/free-solid-svg-icons'

const Review = ({id, name, image, description}) => {
  return (
    <div className="ReseñasContenedor"> 
      <article className="Reseñas">
        <p className="DescriptionReview">{description}</p>
        <img className="FotoReview" src={image} alt="imagenClientes"></img>
        <h3 className="NombreReview">{name}</h3>
        <div className="iconosReview">
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
        </div>
      </article>
    </div>
  )
}
export default Review