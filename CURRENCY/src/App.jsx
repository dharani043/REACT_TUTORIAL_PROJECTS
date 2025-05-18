import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
function App() {
  const [amount,setAmount] = useState(1)
  const [fromCurrency,setFromCurrencey]=useState("USD")
  const [toCurrency,setToCurrencey]=useState("INR")
  const [convertedAmount,setConvertedAmount]=useState(null)
  const [exchangeRate,setExchangeRate]=useState(null)
  useEffect(()=>{
    const getExchangeRate =async()=>{
      try{
        let url=`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
        const response=await axios.get(url)
        setExchangeRate(response.data.rates[toCurrency])
      }
      catch(error){
        console.error("Error fetching exchage Rate, ",error);
        
      }
    };
    getExchangeRate();
  },[fromCurrency,toCurrency]);

  useEffect(()=>{
    if(exchangeRate!=  null){
      setConvertedAmount((amount*exchangeRate).toFixed(2))
    }
  },[amount,exchangeRate])
  
  const handleAmountChange=(e)=>{
    const value=parseFloat(e.target.value)
    setAmount(isNaN(value)? 0:value)
  }
  const handleFromAmountChange=(e)=>{
    setFromCurrencey(e.target.value)
  } 
  const handleToAmountChange=(e)=>{
    setToCurrencey(e.target.value)
  } 
  return (
    <>
    <div className="outside">
    <div className="currency-converter">
      <div className="box">
        {/* <img src='.\src\assets\currencyConverter.png' alt="CurrencyConverter"/> */}
        <div className="data">
          <h1>Currency Converter</h1>
          <div className="input-container">
            <label htmlFor="amt">Amount: </label>
            <input type="number" id="amt" value={amount} onChange={handleAmountChange}/>
          </div>
          <div className="input-container">
            <label htmlFor="fromCurrency">From Currency: </label>
            <select id="fromCurrency" value={fromCurrency} onChange={handleFromAmountChange}>
              <option value="USD">USD - United </option>
              <option value="EUR">EUR - </option>
              <option value="GBP">GBP - </option>
              <option value="JPY">JPY - </option>
              <option value="AUD">AUD - </option>
              <option value="CAD">CAD - </option>
              <option value="CNY">CNY - </option>
              <option value="INR">INR - </option>
              <option value="BRL">BRL - </option>
              <option value="ZAR">ZAR - </option>
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="toCurrency">To Currency: </label>
            <select id="toCurrency" value={toCurrency} onChange={handleToAmountChange}>
              <option value="USD">USD - United </option>
              <option value="EUR">EUR - </option>
              <option value="GBP">GBP - </option>
              <option value="JPY">JPY - </option>
              <option value="AUD">AUD - </option>
              <option value="CAD">CAD - </option>
              <option value="CNY">CNY - </option>
              <option value="INR">INR - </option>
              <option value="BRL">BRL - </option>
              <option value="ZAR">ZAR - </option>
            </select>
          </div>
          <div className="result">
            <p> {amount} {fromCurrency} is equal to {convertedAmount} {toCurrency}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
