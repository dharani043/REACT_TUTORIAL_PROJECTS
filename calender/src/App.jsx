import { useState } from 'react'
import './App.css'

const daysOfWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
const months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
function App() {
  const[selectDate,setSelectDate]=useState(new Date())
  const daysInMonth=()=>
  {
    const daysArray=[]
    const firstDay=new Date(selectDate.getFullYear(),selectDate.getMonth(),1)
    const lastDay=new Date(selectDate.getFullYear(),selectDate.getMonth()+1,0)
    for(let i=0;i<firstDay.getDay();i++)
    {
      daysArray.push(null)
    }
    for(let i=1;i<=lastDay.getDate();i++){
      daysArray.push(new Date(selectDate.getFullYear(),selectDate.getMonth(),i))
    }
    return daysArray
  }
  const isSameDay=(date1,date2)=>{
    return date1.getDate()===date2.getDate()&& date1.getMonth()===date2.getMonth()
    && date1.getFullYear()===date2.getFullYear()
  }
  const handleChangeMonth=(e)=>{
    const newMonth=parseInt(e.target.value,10)
    setSelectDate(new Date(selectDate.getFullYear(),newMonth,1))
  }
  const handleChangeYear=(e)=>{
    const newYear=parseInt(e.target.value,10)
    setSelectDate(new Date(newYear,selectDate.getMonth(),1))
  }
  return (
    <>
    <div className="calender">
      <div className="header">
        <button
         onClick={()=>{setSelectDate(new Date(selectDate.getFullYear(),selectDate.getMonth()-1,1))}}
         ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
</svg></button>
        <select value={selectDate.getMonth()} onChange={handleChangeMonth}>{
          months.map((month,index)=>
          (
            <option key={index} value={index}>{month}</option>
          ))
          }</select>
        <select value={selectDate.getFullYear()} onChange={handleChangeYear}>
          {
            Array.from({length:10},(_,i)=>selectDate.getFullYear()-5+i).map((year)=>(
              <option key={year} value={year} 
              >
              {year}</option>
            ))
          }
        </select>
        <button
        onClick={()=>{setSelectDate(new Date(selectDate.getFullYear(),selectDate.getMonth()+1,1))}}
        ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
</svg></button>
      </div>
      <div className="daysOfWeek">
        {daysOfWeek.map((day)=>(
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="days">{
        daysInMonth().map((day,index)=>(
          <div key={index} className={day?(isSameDay(day,new Date()))?"day current":"day":"empty"}>
            {day?day.getDate():""}</div>
        ))}</div>
    </div>
    </>
  )
}

export default App
