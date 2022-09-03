import React from "react"

export function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return <div className="card">
        {badgeText && <div className="card-badge">{badgeText}</div>}
        <img src={require(`./${props.img}`)} alt='card-img' className='card-img' />
        <div className="card-stats">
            <img src={require('./star.png')} alt='card-star' className="card-star" />
            <span>{props.rating}</span>
            <span className="gray">({props.reviewCount}) • </span>
            <span className="gray">{props.country}</span>
        </div>
        <p className="card-title">{props.title}</p>
        <p className="card-price"><span className="bold">From ${props.price}</span> / Person</p>
    </div>
}