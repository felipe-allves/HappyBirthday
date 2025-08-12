import { useState } from 'react'
import './assets/Styles/default.css'
import Hero from './assets/Components/Hero/Hero'
import Message from './assets/Components/Message/Message'
import Gallery from './assets/Components/Gallery/Gallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero/>
    <Message/>
    <Gallery/>
    </>
  )
}

export default App
