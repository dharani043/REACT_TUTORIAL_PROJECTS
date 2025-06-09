import React from 'react'
import Childcomponent from './Childcomponent'

const Parentcomponent = () => {
    const handleClick=()=>{
        console.log("Clicked")
    }
  return (
    <div className="box">
        <h3>ParentComponent</h3>
        <Childcomponent handleClick={handleClick}/>
    </div>
  )
}

export default Parentcomponent