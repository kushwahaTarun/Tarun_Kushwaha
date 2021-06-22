import React from "react";
import "./index.css";

function Card( props ) {
  return (
  <div className="cards">
    <img src={props.image} alt = "random" />

    <div className="card">
      <h2>Amazon Prime Exclusive</h2>
    </div>
  </div>
  )
}

export default Card;
