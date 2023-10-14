import React from 'react'
import Star from '../images/star.png'

const Card = (props) => {
  const {image, title, price, rating, country, reviewCount} = props
  return (
    <div className="card">
        <img src={image} className="card--image" />
        <div className="card--stats">
            <img src={Star} className="card--star" />
            <span>{rating}</span>
            <span className="gray">({reviewCount}) • </span>
            <span className="gray">{country}</span>
        </div>
        <p>{title}</p>
        <p><span className="bold">From {price}</span> / person</p>
    </div>
)
}

export default Card
