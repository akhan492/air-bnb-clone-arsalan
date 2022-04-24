import React from 'react'
import "./Card.css";

function Card({city, url, Kilomiter , bgClr}) {
  return ( <>
<div className="khan" style={{width: "18rem",backgroundColor:bgClr}}>
  <img 
    src={url}
    className="card-img-top"
    alt={city}
    // width={100}
  />
  <div className="card-body">
    <h1 className="card-title">{city}</h1>
    <p className="card-text">
      {Kilomiter} Kilomiter away
    </p>
  </div>
</div>
    </>
  )
}
export default Card