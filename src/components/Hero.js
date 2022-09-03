import React from "react"

export function Hero() {
    return <section className="hero">
        <img src={require('./group-picture.png')} alt='group' className='hero-photo' />
        <h1 className="hero-header">Online Experiences</h1>
        <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
}