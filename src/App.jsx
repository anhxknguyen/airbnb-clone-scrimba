import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import "./styles/App.css"
import data from "./data"


export default function App() {
    const allCards = data.map(card => {
        return (
            <Card 
                key={card.id}
                img={card.coverImg}
                rating={card.stats.rating}
                reviewCount={card.stats.reviewCount}
                location={card.location}
                title={card.title}
                price={card.price}
            />
        )
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {allCards}
            </section>
        </div>
    )
}