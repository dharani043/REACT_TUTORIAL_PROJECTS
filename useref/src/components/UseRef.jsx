import {React,useRef} from 'react'

const UseRef = () => {
  const countRef=useRef(0)
  const spanRef=useRef(null)
  const handleClick=()=>{
    countRef.current++
    spanRef.current.innerText=countRef.current
  }
  return (
    <>
      <div>
        <button onClick={handleClick}>
          UseRef <span ref={spanRef}>0</span> 
        </button>
      </div>
    </>
  )
}

export default UseRef