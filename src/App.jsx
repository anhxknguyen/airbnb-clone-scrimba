import { useState } from 'react'
import Navbar from './Components/Navbar'
import './styles/App.css'
import Hero from './Components/Hero'
import Card from './Components/Card'

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
    </div>
  )
}

export default App
