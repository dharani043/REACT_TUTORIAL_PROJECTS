import React, { useContext } from 'react'
import { GrandContext } from './Grandparentcomponent'

const Childcomponent = ({handleClick}) => {
    const value=useContext(GrandContext)
  return (
    <div className="box">
        <h3>ChildComponent </h3>
        <p>{value}</p>
        <button onClick={handleClick}>CLICK</button>
    </div>
  )
}

export default Childcomponent