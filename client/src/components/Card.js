import {Link} from "react-router-dom"
const Card = ({book}) => {
    const {bookTitle, imageUrl, authorName} = book;
    
  return (
    <Link to={`/book/${book._id}`}>
    <div className="w-56 mx-2 ">
      <img src={imageUrl} alt="" />
      <div>
        <h3>{bookTitle}</h3>
        <p>{authorName}</p>
      </div>
    </div>
    </Link>
  )
}

export default Card
