import React, { useState ,useRef} from 'react'

const ToastContainer = () => {
    const [toasts,setToast]=useState([])
    const timeRef=useRef({})
    const showToast=(message,type)=>{
        const id=new Date().getTime();
        const newToast=[...toasts,{id,message,type}]
        setToast(newToast)
        timeRef.current[id]=setTimeout(()=>closeToast(id),4000)
    }
    const closeToast=(id)=>{
        clearTimeout(timeRef.current[id])
        delete timeRef.current[id]
        setToast((prevToasts)=>{
            const filterToast= prevToasts.filter((toast)=>{
                return toast.id!=id
            })
            return filterToast
        })
    }


  return (
    <div className='container'>
        <div className="toast-container">
            {
                toasts.map((toast)=>(<div className={`toast ${toast.type}`} key={toast.id}>
                    {toast.message}
                    <span onClick={()=>closeToast(toast.id)}>&times;</span>
                </div>))
            }
        </div>
        <div className="button-container">
            <button onClick={()=>showToast("Success Message","success")} className='success'>Success</button>
            <button onClick={()=>showToast("Warning Message","warning")}  className='warning'>Warning</button>
            <button onClick={()=>showToast("Info Message","info")}  className='info'>Info</button>
            <button onClick={()=>showToast("Danger Message","danger")}  className='danger'>Danger</button>
        </div>
    </div>
  )
}

export default ToastContainer