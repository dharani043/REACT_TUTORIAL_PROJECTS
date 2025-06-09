
import { useState } from 'react'
import './App.css'
import ProgressBar from './ProgressBar'

function App() {
  const [show,setShow]=useState(false)
  return (
    <>
      <div className="container">
        {show ? <ProgressBar />:""}
        <button onClick={()=>setShow(!show)}>Toggle Progress</button>
      </div>
    </>
  )
}

export default App
