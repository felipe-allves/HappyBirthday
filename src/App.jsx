import { useState } from 'react'
import './assets/Styles/default.css'
import Hero from './assets/Components/Hero/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero/>
    </>
  )
}

export default App
