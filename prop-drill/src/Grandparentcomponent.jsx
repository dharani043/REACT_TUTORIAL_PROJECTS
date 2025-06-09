import React, { createContext } from 'react'
import Parentcomponent from './Parentcomponent'
export const GrandContext=createContext();

const Grandparentcomponent = () => {
    const data="HELLO I am Grandparent"
  return (
    <div className="box">
        <h1>GrandParentComponent</h1>
        <GrandContext.Provider value={data}>
        <Parentcomponent />
        </GrandContext.Provider>
    </div>
  )
}

export default Grandparentcomponent