import React, { useEffect, useState } from 'react'
import "./AdviceApp.css"
const AdviceApp = () => {
  const[count,setCount]=useState(0)
  const [advice,setAdivce]=useState("Please Click Button");
  async function getAdvice(){
    const res= await fetch(`https://api.adviceslip.com/advice?timestamp=${Date.now()}`)
    const data =await res.json();
    console.log(data);
    setAdivce(data.slip.advice);
    setCount((c)=>c+1)
  }
  return (
    <div>
        <h3>{advice}</h3>
        <button onClick={getAdvice}>Get Advice</button>
        <p>You have read <b>{count}</b> pieces of advice</p>
    </div>
  )
}

export default AdviceApp