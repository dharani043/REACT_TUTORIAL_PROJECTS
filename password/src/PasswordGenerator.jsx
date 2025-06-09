import React, { useState } from 'react'

const PasswordGenerator = () => {
    const [length,setLength]=useState(8)
    const [includeUpper,setUpper]=useState(true)
    const [includeLower,setLower]=useState(true)
    const [includeNumber,setNumber]=useState(true)
    const [includeSymbol,setSysmbol]=useState(true)
    const [password,setPassword]=useState("")
    const generatePassword=()=>{
        let charset="";
        if(includeUpper) charset+="ABCDEFGHIJKLMNOPQURSTUVWXYZ"
        if(includeLower) charset+="abcdefghijklmnopqrstuvwxyz"
        if(includeNumber) charset+="1234567890"
        if(includeSymbol) charset+="!@#$%^&*_=+"
        let generatedPassword=""
        for(let i =0; i<length;i++)
        {
            const randomIndex=Math.floor(Math.random()*charset.length)
            generatedPassword+=charset[randomIndex];
        }
        setPassword(generatedPassword)
    }
    const copyToClipboard=()=>{
        navigator.clipboard.writeText(password)
        alert("Password Copied")
    }
  return (
    <div className="password-generator">
        <h2>Strong Password Generator</h2>
        <div className="input-group">
            <label htmlFor='num'>Password Length : </label>
            <input type="number" id="num" value={length} onChange={(e)=>setLength(parseInt(e.target.value))}/>
        </div>
        <div className="checkbox-group">
            <input type="checkbox" id="upper" checked={includeUpper}
            onChange={(e)=>setUpper(e.target.checked)}/>
            <label htmlFor="upper">Include Uppercase</label>
        </div>
        <div className="checkbox-group">
            <input type="checkbox" id="lower" checked={includeLower}
            onChange={(e)=>setLower(e.target.checked)}/>
            <label htmlFor="lower">Include Lowercase</label>
        </div>
        <div className="checkbox-group">
            <input type="checkbox" id="numbers"checked={includeNumber}
            onChange={(e)=>setNumber(e.target.checked)} />
            <label htmlFor="numbers">Include Numbers</label>
        </div>
        <div className="checkbox-group">
            <input type="checkbox" id="symbol" checked={includeSymbol}
            onChange={(e)=>setSysmbol(e.target.checked)}/>
            <label htmlFor="symbol">Include Symbol</label>
        </div>
        <button className="generate-btn" onClick={generatePassword}>Generate Password</button>
        <div className="generated-password">
            <input type="text" readOnly value={password}/>
            <button className='copy-btn' onClick={copyToClipboard}>Copy</button>
        </div>
    </div>
  )
}

export default PasswordGenerator