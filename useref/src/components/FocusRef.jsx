import {React,useRef} from 'react'

const FocusRef = () => {
    const inputRef=useRef(null)
    const inputRef1=useRef(null)
    const inputRef2=useRef(null)
    const handleClick=()=>{
        inputRef.current.focus();
        inputRef.current.style.backgroundColor="lightgray"
        inputRef1.current.style.backgroundColor=""
        inputRef2.current.style.backgroundColor=""
    }
    const handleClick1=()=>{
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor="lightgray"
        inputRef.current.style.backgroundColor=""
        inputRef2.current.style.backgroundColor=""
    }
    const handleClick2=()=>{
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor="lightgray"
        inputRef1.current.style.backgroundColor=""
        inputRef.current.style.backgroundColor=""
    }
  return (
    <div>
        <input type="text" ref={inputRef}/>
        <button onClick={handleClick}>Click</button>
        <br />
        <input type="text" ref={inputRef1}/>
        <button onClick={handleClick1}>Click</button>
        <br />
        <input type="text" ref={inputRef2}/>
        <button onClick={handleClick2}>Click</button>
    </div>
  )
}

export default FocusRef