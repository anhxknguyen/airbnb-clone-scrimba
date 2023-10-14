import { useState } from 'react'
import Navbar from './Components/Navbar'
import './styles/App.css'
import Hero from './Components/Hero'
import Card from './Components/Card'
import Katie from './images/katie-zaferes.png'

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Card 
        image={Katie}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zafares" 
        price={136}
      />
    </div>
  )
}

export default App
