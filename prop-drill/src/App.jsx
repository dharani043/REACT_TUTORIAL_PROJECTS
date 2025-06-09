import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Grandparentcomponent from './Grandparentcomponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Grandparentcomponent/>
    </>
  )
}

export default App
