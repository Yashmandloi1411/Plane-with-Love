import { useState } from "react";

function Card({ id, image, info, price, name, removeTour }) {
  const [readmore, setReadmore] = useState(false);

  // if readmore vali btn pr click h mtlb pura data dek rha ha nhi to ada data dek rha h
  const description = readmore ? info : `${info.substring(0, 200)}....`;

  function handelClick() {
    setReadmore(!readmore);
  }

  return (
    <div className="Card">
      <img src={image} className="image"></img>

      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">₹{price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>

        <div className="description">
          <p>{description}</p>
          <span className="read-more" onClick={handelClick}>
            {readmore ? `show less` : `read more`}
          </span>
        </div>
      </div>

      <button className="btn-red" onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </div>
  );
}
export default Card;
