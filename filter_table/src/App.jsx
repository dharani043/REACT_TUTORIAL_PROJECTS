
import { useState } from 'react'
import './App.css'
import { data } from './assets/data'
function App() {
  const [search,setSearch]=useState("")
  return (
    <>
    <div className="container mt-5">
      <h3 className='tex-primary'>Filter data table</h3>
      <form className='col-md-5'>
        <input type="text" 
        className='form-control'
        placeholder='Search Text' onChange={(e)=>setSearch(e.target.value)}/>
      </form>
      <table className='table table-bordered table-striped mt-3'>
        <thead>
        <tr>
          <th>S.no</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
        </thead>
        <tbody>
          {
            data.filter((item)=>{

              return search==="" ? item:item.first_name.toLowerCase().includes(search.toLowerCase()) ||
              item.last_name.toLowerCase().includes(search.toLowerCase()) ||
              item.email.toLowerCase().includes(search.toLowerCase()) ||
              item.phone.toLowerCase().includes(search.toLowerCase())
            }
            ).map((item,index)=>(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
    </>
  )
}

export default App
