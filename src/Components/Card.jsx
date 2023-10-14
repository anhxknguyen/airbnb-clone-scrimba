import React from "react"

export default function Card(props) {
    let badgeText
    const card = props.card

    if (props.card.openSpots === 0) {
        badgeText = "SOLD OUT"
    }   else if (props.card.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${card.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="./images/star.png" className="card--star" />
                <span>{card.stats.rating}</span>
                <span className="gray">({card.stats.reviewCount}) • </span>
                <span className="gray">` {card.location}`</span>
            </div>
            <p>{card.title}</p>
            <p><span className="bold">From ${card.price}</span> / person</p>
        </div>
    )
}