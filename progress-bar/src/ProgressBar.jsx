import React, { useEffect, useState } from 'react'

const ProgressBar = () => {
    const [bar,setBar]=useState(0)
    useEffect(()=>{
        const interval=setInterval(()=>{
            setBar((prevBarValue)=>{
                if(prevBarValue>=100){
                    alert("Progress Completed")
                    clearInterval(interval)
                }
                return Math.min(prevBarValue +1,100)
            })
        },50)
        return ()=>{
            clearInterval(interval)
        }
    },[])
  return (
    <div className="progress-container">
        <div className="progress" style={{transform:`translateX(${bar-100}%)`}}></div>
    </div>
  )
}

export default ProgressBar