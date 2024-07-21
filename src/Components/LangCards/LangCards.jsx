import React from 'react'
import './LangCards.css'
import {Link} from "react-router-dom";

export default function LangCards(props) {
  return (
    <>
      <div class="card cardStyle" >
        <Link to={props.toVal}>
          <div><img src={props.source} class="card-img-top" alt="..." style={{height:'161px'}}/></div>
          <div class="card-body">
            <h5 class="card-text">{props.value}</h5>
          </div>
        </Link>
      </div>
    </>
  )
}
